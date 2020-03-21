import * as actionTypes from '../../actions/actionTypes';
import updateObject from '../../../utils/functions/updateObject';
import Movie from '../../../models/Movie';

const initialState = {
  movies: [],
  isLoading: false,
};

const mappingMovies = (state, movies) => {
  if (movies && movies.length) {
    const mappedMovies = movies.map(movie => {
      const aMovie = new Movie();
      aMovie.mapMovies(movie);
      return aMovie;
    });
    return updateObject(state, {movies: mappedMovies, isLoading: false});
  }
  return updateObject(state, {movies: [], isLoading: false});
};

const listMovies = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_MOVIES_SUCCESS:
      return mappingMovies(state, action.movies);
    case actionTypes.LIST_MOVIES_ATTEMPT:
      return updateObject(state, {isLoading: true});
    case actionTypes.LIST_MOVIES_FAILED:
      return updateObject(state, {isLoading: false});
    default:
      return state;
  }
};

export default listMovies;
