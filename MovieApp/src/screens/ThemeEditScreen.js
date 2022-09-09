import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {ThemeContext} from '../context/theme';
import {useNavigation} from '@react-navigation/core';

const ThemeEditScreen = () => {
  const {theme, setLightTheme, setDarkTheme} = useContext(ThemeContext);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Ionicons name="ios-chevron-back" size={48} />
      </TouchableOpacity>
      <View style={styles.config}>
        <TouchableOpacity style={styles.buttonLight} onPress={setLightTheme}>
          <Text style={styles.textLight}>Light</Text>
          <Ionicons name="ios-sunny" size={45} style={styles.iconLight} />
        </TouchableOpacity>
        <Octicons name="arrow-switch" size={70} />
        <TouchableOpacity style={styles.buttonDark} onPress={setDarkTheme}>
          <Text style={styles.textDark}>Dark</Text>
          <Ionicons name="ios-moon" size={45} style={styles.iconDark} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  config: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 150,
    alignItems: 'center',
  },
  buttonLight: {
    display: 'flex',
    height: 80,
    width: 140,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#ffecb3',
    borderWidth: 2,
    flexDirection: 'row',
  },
  textLight: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 13,
    color: 'black',
    fontSize: 28,
    paddingLeft: 20,
  },
  iconLight: {
    color: 'orange',
  },
  buttonDark: {
    display: 'flex',
    height: 80,
    width: 140,
    backgroundColor: '#616161',
    borderRadius: 25,
    borderColor: '#ffecb3',
    borderWidth: 2,
    flexDirection: 'row',
  },
  textDark: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 13,
    color: 'white',
    fontSize: 28,
    paddingLeft: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: '#ffc107',
    borderRadius: 25,
    margin: 18,
    borderTopColor: 'red',
    borderBottomColor: '#2196f3',
    borderLeftColor: 'green',
    borderRightColor: 'magenta',
    borderWidth: 1.5,
  },
});

export default ThemeEditScreen;
