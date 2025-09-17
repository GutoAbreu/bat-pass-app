import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtomStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { BatSlider } from '../BatSlider/batSlider';
import generatePass from '../../services/passwordService.';

export function BatButtom() {

  const[pass, setPass] = useState('');
  const[sliderValue, setSliderValue] = useState(8);
  
  function handleGenerateButtom() {
    
    let generateToken = generatePass( 10);

    setPass(generateToken);
  }

  function handleCopyButtom() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>  
        
        <BatSlider />
        
        <BatTextInput pass={pass} />
        
        <Pressable 
            onPress={handleGenerateButtom}
            style={styles.button}
        >
            <Text style={styles.text}> GENERATE </Text>
        </Pressable>

        <Pressable 
            onPress={handleCopyButtom}
            style={styles.button}>
            <Text style={styles.text}> COPY </Text>
        </Pressable>
    </>
  );
}