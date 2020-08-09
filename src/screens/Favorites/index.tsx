import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => (
  <View style={styles.container}>
    <PageHeader title="Meus proffys favoritos" />

    <ScrollView
      style={styles.teachersList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </ScrollView>
  </View>
);

export default Favorites;
