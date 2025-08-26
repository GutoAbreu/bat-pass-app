import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtomStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButtom() {
  return (
    <>
        <BatTextInput />
        
        <Pressable 
            onPress={() => {console.log('clicou no GENERATE')}}
            style={styles.button}>
            <Text style={styles.text}> GENERATE </Text>
        </Pressable>

        <Pressable 
            onPress={() => {console.log('clicou no COPY')}}
            style={styles.button}>
            <Text style={styles.text}> COPY </Text>
        </Pressable>
    </>
  );
}