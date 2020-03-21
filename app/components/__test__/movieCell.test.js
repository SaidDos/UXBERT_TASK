import 'react-native';
import React from 'react';
import MovieCell from '../cells/movieCell';

import renderer from 'react-test-renderer';

it('should renders correctly', () => {
  const movie = {id: 1, title: 'said', year: '2030'};
  const tree = renderer.create(<MovieCell movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});
