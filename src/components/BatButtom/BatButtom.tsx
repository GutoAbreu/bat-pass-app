import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtomStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButtom() {

  const[pass, setPass] = useState('');

  function handleGenerateButtom() {
    setPass('ola');
  }

  return (
    <>
        <BatTextInput pass={pass} />
        
        <Pressable 
            onPress={handleGenerateButtom}
            style={styles.button}
        >
            <Text style={styles.text}> GENERATE</Text>
        </Pressable>

        <Pressable 
            onPress={() => {console.log('clicou no COPY')}}
            style={styles.button}>
            <Text style={styles.text}> COPY </Text>
        </Pressable>
    </>
  );
}