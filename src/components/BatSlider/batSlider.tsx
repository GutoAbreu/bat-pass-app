import React, {useState} from 'react';
import { Text, TextInput } from 'react-native';

import { styles } from './batSliderStyles';
import Slider from '@react-native-community/slider';

let passwordLengthMin = 8;
let passwordLengthMax = 20;


export function BatSlider( ) {
  const [sliderValue1, setSliderValue] = useState(8);

  return (
    <>
        <Text style={styles.title}> 
            Defina o tamanho da senha 
        </Text>

        <Slider 
            onValueChange={setSliderValue}
            style={styles.slider}
            minimumValue={passwordLengthMin}
            maximumValue={passwordLengthMax}
            step={1}
        />

        <TextInput 
            style = {styles.inputer}
            value = {sliderValue1.toString()}
            editable={false}
        />

    </>
  );
}