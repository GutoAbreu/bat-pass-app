import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { BatLogo } from '../../components/BatLogo/BatLogo';
import {styles} from './styles';

export default function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          {/* Titulo e logo */}
          <BatLogo />
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

