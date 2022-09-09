import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';
import AntDesign from 'react-native-vector-icons/AntDesign';


//Needs to be develop. (+ import useState)
const SignInScreen = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
//  Navigations
  const navigation = useNavigation();
  const onPress1 = () => {
    navigation.navigate('BottomNavigation');
  };
  const onPress2 = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>MOVIE MATE</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/movieLogo.png')}
        />
        <View>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPress1}>
              <Text style={styles.buttonText}>Sign In</Text>
              <AntDesign name="caretright" size={24} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomStyle}>
            <Text style={styles.bottomText}>Don't have an account?</Text>
            <TouchableOpacity style={styles.bottomButton} onPress={onPress2}>
              <Text style={styles.bottomButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 30,
    color: '#212121',
  },
  imageStyle: {
    width: 330,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    marginTop: 20,
    width: 200,
    height: 40,
    position: 'relative',
    backgroundColor: '#ffecb3',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: '#212121',
    borderWidth: 2,
  },
  buttonContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#212121',
    alignSelf: 'center',
    fontSize: 25,
  },
  buttonStyle: {
    top: -25,
    flexDirection: 'row',
    width: 120,
    height: 60,
    backgroundColor: '#ffc107',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#212121',
  },
  iconStyle: {
    paddingLeft: 1,
    marginTop: 17,
    color: 'yellow',
  },
  bottomText: {
    fontSize: 18,
    marginTop: 35,
    alignSelf: 'center',
    color: '#c79100',
  },
  bottomStyle: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomButton: {
    marginTop: 15,
    width: 80,
    height: 30,
    backgroundColor: '#ffc107',
    borderRadius: 25,
    borderColor: '#212121',
    borderWidth: 1.5,
  },
  bottomButtonText: {
    fontSize: 18,
    color: '#212121',
    padding: 1,
    alignSelf: 'center',
  },
});
