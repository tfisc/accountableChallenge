import React from 'react';
import {View} from 'react-native';
import {useAppDispatch} from '../../store/hooks';
import {shuffle} from '../../store/slices/players/players.slice';
import Button from '../Button/Button';
import style from './ShuffleButton.style';

const ShuffleButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(shuffle());
  };
  return (
    <View style={style.container}>
      <Button label="SHUFFLE" onPress={handlePress} />
    </View>
  );
};

export default ShuffleButton;
