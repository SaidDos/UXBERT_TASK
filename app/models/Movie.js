import {checkValue} from '../utils/functions/checkValue';

// Movie Model
export default class Movie {
  mapMovies(movie) {
    this.id = checkValue(movie.imdbID, null);
    this.title = checkValue(movie.Title, '');
    this.poster = checkValue(movie.Poster, '');
    this.year = checkValue(movie.Year, '');
    this.type = checkValue(movie.Type, '');
  }
}
