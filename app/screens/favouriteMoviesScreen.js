/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {getObj} from '../utils/functions/caching';
import MovieCell from '../components/cells/movieCell';
import {findObjectInArray} from '../utils/functions/findObjectInArray';
import {getUniqueArrayIDs} from '../utils/functions/getUniqueArrayIDs';
import {shareFile} from '../utils/functions/shareFile';
import {NavigationEvents} from 'react-navigation';

const favouriteMoviesScreen = props => {
  const renderItem = ({item}) => (
    <MovieCell movie={item} shareMovie={shareMovie} />
  );
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const getCachedMovies = async () => {
    const favourites = await getObj('Movies');
    if (favourites && favourites.length) {
      const uniqueFavouriteMovies = getUniqueArrayIDs(favourites).map(id => {
        return findObjectInArray(favourites, id);
      });
      setFavouriteMovies(uniqueFavouriteMovies);
    }
  };

  const shareMovie = movie => {
    shareFile(movie.poster);
  };

  const renderCachedFavouriteMovies = () => {
    if (favouriteMovies && favouriteMovies.length) {
      return (
        <FlatList
          style={styles.flatlist}
          data={favouriteMovies}
          renderItem={renderItem}
          extraData={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      );
    }
    return <Text>There's No Favourite Movies</Text>;
  };
  return (
    <View style={styles.container}>
      {/* navigationevents here instead of componentDidMount or useEffect in case of navigation */}
      <NavigationEvents onDidFocus={() => getCachedMovies()} />
      {renderCachedFavouriteMovies()}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    marginTop: 20,
  },
});

export default favouriteMoviesScreen;
