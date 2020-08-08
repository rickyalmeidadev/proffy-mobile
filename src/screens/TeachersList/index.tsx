import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const TeachersList: React.FC = () => (
  <View style={styles.container}>
    <PageHeader title="Proffys disponíveis" />
  </View>
);

export default TeachersList;
