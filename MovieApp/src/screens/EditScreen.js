import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useNavigation} from '@react-navigation/core';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  
  const EditScreen = () => {
    const [email, onChangeEmail] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
  
    const navigation = useNavigation();
    const onPress = () => {
        //Navigates to Bottom Tab Navigation (Profile Screen)
      navigation.navigate('Profile');
    };
  //Needs to be develop.
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={{width: 330, height: 200, alignSelf: 'center', marginBottom: 20}}
            source={require('../../assets/movieLogo.png')}
          />
          <Text style={styles.infoTextStyle}>EDIT PROFILE INFO</Text>
          <View>
          <TextInput
              placeholder="E-mail"
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
            />
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
              <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                <Text style={styles.buttonText}>SAVE</Text>
                <AntDesign name="caretright" size={24} style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default EditScreen;
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
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
      flexDirection: 'row',
      width: 120,
      height: 50,
      backgroundColor: '#ffc107',
      borderRadius: 25,
      alignSelf: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#212121',
    },
    iconStyle: {
      paddingLeft: 1,
      marginTop: 13,
      color: 'yellow'
    },
    infoTextStyle: {
        fontSize: 24,
        color: 'black',
        alignSelf: 'center'
    }
  });
  