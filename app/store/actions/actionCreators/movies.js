import * as actionTypes from '../actionTypes';
import api from '../../../services/fetchApi';

const listMoviesAttempt = () => ({type: actionTypes.LIST_MOVIES_ATTEMPT});

const listMoviesFailed = () => ({type: actionTypes.LIST_MOVIES_FAILED});

const listMoviesSuccess = responseJson => ({
  type: actionTypes.LIST_MOVIES_SUCCESS,
  movies: responseJson.Search,
});

export const listMovies = (
  searchTerm,
  listMoviesRequestResponseHandler,
) => dispatch => {
  dispatch(listMoviesAttempt());
  api
    .getData(`&s=${searchTerm}`, 'GET', null, null)
    .then(responseJson => {
      dispatch(listMoviesSuccess(responseJson));
      listMoviesRequestResponseHandler.onSuccess();
    })
    .catch(error => {
      dispatch(listMoviesFailed());
      listMoviesRequestResponseHandler.onFail(error);
    });
};
