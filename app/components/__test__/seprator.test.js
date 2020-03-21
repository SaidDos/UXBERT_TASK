import 'react-native';
import React from 'react';
import Seprator from '../views/seprator';

import renderer from 'react-test-renderer';

it('should renders correctly', () => {
  const tree = renderer.create(<Seprator />).toJSON();
  expect(tree).toMatchSnapshot();
});
