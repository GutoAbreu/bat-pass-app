import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';
import { BatButtom } from '../../components/BatButtom/BatButtom';

import {styles} from './styles';


export default function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          {/* Titulo e logo */}
          <BatLogo />
        </View>

        <View style={styles.inputContainer}>
          <BatButtom />
        </View>

        <StatusBar style="light" />
    </View>
  );
}

