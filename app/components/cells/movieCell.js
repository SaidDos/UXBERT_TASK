import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import FavouriteIcon from 'react-native-vector-icons/MaterialIcons';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';

const movieCell = props => {
  const {movie, setFavourite, keyName, shareMovie} = props;

  return (
    <View style={styles.cell}>
      <Image source={{uri: movie.poster}} style={styles.image} />
      <View style={styles.textArea}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={{color: colors.GREY}}> Tyspe: {movie.type}</Text>
        <Text style={{color: colors.GREY}}> Year: {movie.year}</Text>
      </View>
      <View style={styles.icons}>
        {/* here I render favouriteIcon based on keyName conditionally
        to use the same component in the 2 screens  */}
        {keyName === 'SearchMovies' && (
          <FavouriteIcon
            name="favorite-border"
            size={30}
            style={styles.icon}
            onPress={() => setFavourite(movie)}
            color={colors.APP_THEME_COLOR}
          />
        )}
        <ShareIcon
          name="md-share"
          size={30}
          style={styles.icon}
          onPress={() => shareMovie(movie)}
          color={colors.APP_THEME_COLOR}
        />
      </View>
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    height: 100,
    width: 319.3,
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    justifyContent: 'flex-start',
  },
  textArea: {
    marginHorizontal: 10,
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    paddingHorizontal: 10,
  },
  icons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 5,
  },
});
export default movieCell;
