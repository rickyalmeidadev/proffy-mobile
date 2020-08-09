import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeachersList: React.FC = () => (
  <View style={styles.container}>
    <PageHeader title="Proffys disponíveis" />

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

export default TeachersList;
