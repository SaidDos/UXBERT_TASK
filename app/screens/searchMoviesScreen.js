/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import colors from '../utils/colors';
import MovieCell from '../components/cells/movieCell';
import {listMovies} from '../store/actions/actionCreators';
import {useDispatch, useSelector} from 'react-redux';
import SearchTextInput from '../components/textInputs/searchTextInput';
import {cacheObj, getObj} from '../utils/functions/caching';
import {shareFile} from '../utils/functions/shareFile';
import {NavigationEvents} from 'react-navigation';

const searchMoviesScreen = props => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(null); //initializing search term by null
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const isLoading = useSelector(state => state.listMovies.isLoading);
  let movies = useSelector(state => state.listMovies.movies);

  const onChangeText = term => {
    setSearchTerm(term);
  };

  const listMoviesRequestResponseHandler = {
    onSuccess: () => {},
    onFail: error => alert(error),
  };

  useEffect(() => {
    // here i restrict user to type more than 2 characters for 2 reasons:
    // 1- to reduce number of requests to the server
    // 2- as if typed 1 or 2 characters it gives me an error (too many results)

    if (searchTerm && searchTerm.length > 2) {
      dispatch(listMovies(searchTerm, listMoviesRequestResponseHandler)); //fetching movies when mounting screen and refetching again when searchTerm changes
    }
  }, [searchTerm]);

  const getCachedMovies = async () => {
    const favourites = await getObj('Movies');
    setFavouriteMovies(favourites);
  };

  const setFavourite = movie => {
    if (favouriteMovies && favouriteMovies.length) {
      const clonnedMovies = JSON.parse(JSON.stringify(favouriteMovies));
      clonnedMovies.push(movie);
      cacheObj(clonnedMovies, 'Movies');
    } else {
      let firstFavouriteMovies = [];
      firstFavouriteMovies.push(movie);
      cacheObj(firstFavouriteMovies, 'Movies');
    }

    alert(movie.title + ' added to favourites');
  };

  const shareMovie = movie => {
    shareFile(movie.poster);
  };

  const renderItem = ({item}) => (
    <MovieCell
      movie={item}
      setFavourite={setFavourite}
      shareMovie={shareMovie}
      keyName={'SearchMovies'}
    />
  );
  const footer = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={colors.APP_THEME_COLOR} />;
    }
    return <Text style={styles.footer}> No More Movies </Text>;
  };

  return (
    <View style={styles.container}>
      {/* navigationevents here instead of componentDidMount or useEffect in case of navigation */}
      <NavigationEvents onDidFocus={() => getCachedMovies()} />
      <View style={styles.margin}>
        <SearchTextInput onchangeText={onChangeText} searchTerm={searchTerm} />
      </View>
      <FlatList
        keyboardShouldPersistTaps="always" // to inable clicking when keyboard is opened
        style={styles.margin}
        data={movies}
        extraData={movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        ListFooterComponent={footer}
      />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  margin: {
    marginTop: 20,
  },
  footer: {
    alignSelf: 'center',
  },
});

export default searchMoviesScreen;
