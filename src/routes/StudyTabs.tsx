import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeachersList from '../screens/TeachersList';
import Favorites from '../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator>
    <Screen name="TeachersList" component={TeachersList} />
    <Screen name="Favorites" component={Favorites} />
  </Navigator>
);

export default StudyTabs;
