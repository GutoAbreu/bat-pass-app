import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './BatButtomStyles';

export function BatButtom() {
  return (
    <View style={styles.container}>
        <Button 
            accessibilityLabel='click em mim'
            onPress={() => {console.log('clicou')}}
            title="Aperte aqui"
        ></Button>
    </View>
  );
}