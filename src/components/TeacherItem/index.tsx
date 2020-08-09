import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const TeacherItem: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://avatars1.githubusercontent.com/u/60705947?s=460&u=e8e6bbb598b37394cc1a783a494b66b4e48eab2f&v=4' }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Ricky Almeida</Text>
        <Text style={styles.subject}>Matemática</Text>
      </View>
    </View>
  </View>
);

export default TeacherItem;
