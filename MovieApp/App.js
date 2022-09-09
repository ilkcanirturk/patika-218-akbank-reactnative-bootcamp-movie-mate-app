import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BottomNavigation from './src/navigation/BottomNavigation';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import EditScreen from './src/screens/EditScreen';

import ThemeEditScreen from './src/screens/ThemeEditScreen';

import ThemeProvider from './src/providers/ThemeProvider';

import { ThemeContext } from './src/context/theme';

const StackNav = createNativeStackNavigator();

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StackNav.Navigator initialRouteName="SignInScreen">
          <StackNav.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <StackNav.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <StackNav.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{
              headerShown: false
            }}
          />
          <StackNav.Screen
            name="MovieDetailsScreen"
            component={MovieDetailsScreen}
          />
          <StackNav.Screen
            name="EditScreen"
            component={EditScreen}
            options={{
              headerShown: false
            }}
          />
          <StackNav.Screen 
          name="ThemeEditScreen" 
          component={ThemeEditScreen}
          options={{
            headerShown: false,
            title: 'Change Theme',
            headerStyle: {backgroundColor: theme.backgroundColor},
            headerTitleAlign: 'center'
          }}
          />
        </StackNav.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
