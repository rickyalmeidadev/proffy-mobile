import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeachersList from '../screens/TeachersList';
import Favorites from '../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: Platform.OS === 'ios' ? 84 : 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
      },
      safeAreaInsets: {
        bottom: 0,
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: Platform.OS === 'ios' ? 24 : 20,
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16,
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#32264d',
    }}
  >
    <Screen
      name="TeachersList"
      component={TeachersList}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-easel" color={color} size={size} />
        ),
      }}
    />
    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-heart" color={color} size={size} />
        ),
      }}
    />
  </Navigator>
);

export default StudyTabs;
