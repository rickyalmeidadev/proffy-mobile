import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

const GiveClasses: React.FC = () => (
  <View style={styles.container}>
    <ImageBackground
      source={giveClassesBgImg}
      resizeMode="contain"
      style={styles.content}
    >
      <Text style={styles.title}>Quer ser um Proffy?</Text>
      <Text style={styles.description}>
        Para começar, você precisa se cadastrar como professor em nossa plataforma web.
      </Text>
    </ImageBackground>

    <RectButton style={styles.okButton}>
      <Text style={styles.okButtonText}>Tudo bem</Text>
    </RectButton>
  </View>
);

export default GiveClasses;
