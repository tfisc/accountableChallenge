import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackParamList} from '../../components/Router/Router';
import {Player} from '../../interfaces/player.interface';
import style from './PlayerCard.style';

type ListScreenNavigationProp = StackNavigationProp<StackParamList, 'List'>;

type PlayerCardProps = {
  player: Player;
};
const PlayerCard: React.FC<PlayerCardProps> = ({player}) => {
  const navigation = useNavigation<ListScreenNavigationProp>();
  const handlePress = () => {
    navigation.navigate('Details', {player});
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.6}
      style={style.card}>
      <View style={style.informations}>
        <Text>{`${player.first_name} ${player.last_name}`}</Text>
        <Text>{player.team.abbreviation}</Text>
      </View>
      <Text>See details -{'>'}</Text>
    </TouchableOpacity>
  );
};

export default PlayerCard;
