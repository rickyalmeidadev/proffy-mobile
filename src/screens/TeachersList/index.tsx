import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const TeachersList: React.FC = () => (
  <View style={styles.container}>
    <PageHeader title="Proffys disponíveis" />

    <TeacherItem />
  </View>
);

export default TeachersList;
