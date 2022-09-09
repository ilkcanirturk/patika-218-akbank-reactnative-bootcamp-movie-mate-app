import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext} from 'react';

import {ThemeContext} from '../context/theme';


//Search input needs to be develop.

const SearchScreen = () => {
  //for theme change.
  const {theme} = useContext(ThemeContext);
  const [searchtext, onChangeSearchText] = React.useState('');

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={onChangeSearchText}
        value={searchtext}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  searchInput: {
    marginTop: 5,
    width: '100%',
    height: 45,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
});
