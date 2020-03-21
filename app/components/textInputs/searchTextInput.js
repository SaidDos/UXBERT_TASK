import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import colors from '../../utils/colors';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import Separator from '../views/seprator';

const searchTextInput = props => {
  const {onchangeText, searchTerm} = props;
  return (
    <View>
      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onchangeText(text)}
          placeholder={'Search by title...'}
          placeholderTextColor={colors.APP_THEME_COLOR}
          value={searchTerm}
        />
        <SearchIcon
          size={30}
          style={styles.searchIcon}
          color={colors.APP_THEME_COLOR}
          name="ios-search"
        />
      </View>
      <Separator />
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 40,
    alignSelf: 'center',
  },
  searchIcon: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default searchTextInput;
