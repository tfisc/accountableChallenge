import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import {StackParamList} from '../../components/Router/Router';
import {useAppDispatch} from '../../store/hooks';
import {removePlayer} from '../../store/slices/players/players.slice';
import style from './PlayerDetails.style';

type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;

const PlayerDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailsScreenRouteProp>();
  const dispatch = useAppDispatch();
  const player = route.params.player;

  useEffect(() => {
    navigation.setOptions({
      title: `${player.first_name} ${player.last_name}`,
    });
  }, [navigation, player.first_name, player.last_name]);

  const handlePress = () => {
    navigation.goBack();
    if (player) {
      dispatch(removePlayer({id: player?.id}));
    }
  };

  return (
    <View style={style.container}>
      <Text
        style={style.text}>{`${player.first_name} ${player.last_name}`}</Text>
      <Text style={style.text}>{player.team.full_name}</Text>
      <Text style={style.text}>{player.position}</Text>
      <Text style={style.text}>{`${player.height_feet || '?'}'${
        player.height_inches || '?'
      }ft`}</Text>

      <Button label="REMOVE FROM LIST" onPress={handlePress} />
    </View>
  );
};

export default PlayerDetails;
