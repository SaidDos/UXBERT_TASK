import {Dimensions} from 'react-native';

const API_KEY = 'a0c0f006';
export const BASE_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
