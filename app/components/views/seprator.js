import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../utils/colors';

const separator = props => {
  const {style} = props;
  return <View style={[styles.separator, style]} />;
};

// styling
const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.LIGHT_GREY,
  },
});

export default separator;
