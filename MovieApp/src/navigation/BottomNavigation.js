import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/theme';


const BottomNav = createBottomTabNavigator();

//For theme change.
const BottomNavigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <BottomNav.Navigator
      
      screenOptions={{
        // Config of the Bottom Tab Navigation
        tabBarStyle: {height: 65, backgroundColor: theme.headerColor, borderTopWidth: 1.5, borderTopColor: '#ffc107'}, 
       
      }}>
      <BottomNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Home',
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.headerColor},
          headerTitleStyle: {color: theme.color},
          headerTitleAlign: 'center',
          //Tab Bar configurations.
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-home'
                    : 'ios-home-outline'
                }
                size={30}
                color={tabInfo.focused ? '#ffc107' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#ffc107',
        }}
      />
      <BottomNav.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Search',
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.headerColor},
          headerTitleStyle: {color: theme.color},
          headerTitleAlign: 'center',
          
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-search'
                    : 'ios-search-outline'
                }
                size={30}
                color={tabInfo.focused ? '#ffc107' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#ffc107',
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
          headerShown: true,
          headerTitle: 'Profile',
          headerBackVisible: false,
          headerStyle: {backgroundColor: theme.headerColor},
          headerTitleStyle: {color: theme.color},
          headerTitleAlign: 'center',
          
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? 'ios-person-circle'
                    : 'ios-person-circle-outline'
                }
                size={30}
                color={tabInfo.focused ? '#ffc107' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#ffc107',
        }}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigation;


