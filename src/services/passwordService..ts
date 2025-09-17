import React, {useState} from 'react';

interface BatSliderProps {
  // Define any props if needed
  valSliderValue: number;

}

export default function generatePass(props: BatSliderProps): string {
    let password: string       = '';
    let characters: string     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let passwordLength: number = props.valSliderValue;
    console.log(passwordLength);
    for (let index = 0; index < passwordLength; index++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }   

    return password;
}