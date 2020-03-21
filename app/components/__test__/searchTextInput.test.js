import 'react-native';
import React from 'react';
import SearchTextInput from '../textInputs/searchTextInput';

import renderer from 'react-test-renderer';

it('should renders correctly', () => {
  const searchTerm = 'someSearchTerm';
  // eslint-disable-next-line no-alert
  const onchangeText = () => alert('someChangingText');
  const tree = renderer
    .create(
      <SearchTextInput onchangeText={onchangeText} searchTerm={searchTerm} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
