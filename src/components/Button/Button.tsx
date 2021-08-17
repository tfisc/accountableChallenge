import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import style from './Button.style';

type ButtonProps = {
  label: string;
  onPress: () => any;
};
const Button: React.FC<ButtonProps> = ({onPress, label}) => (
  <TouchableOpacity onPress={onPress} style={style.button}>
    <Text style={style.text}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
