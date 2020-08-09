import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

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

    <Text style={styles.bio}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      {'\n'}{'\n'}
      Possimus eligendi pariatur natus ipsum soluta repellendus quae ratione, earum debitis amet!
    </Text>

    <View style={styles.footer}>
      <Text style={styles.price}>
        Preço/hora {'   '}
        <Text style={styles.priceValue}>R$ 20,00</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.favoriteButton, styles.favorited]}>
          <Image source={heartOutlineIcon} />
        </RectButton>

        <RectButton style={styles.contactButton}>
          <Image source={whatsappIcon} />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </View>

  </View>
);

export default TeacherItem;
