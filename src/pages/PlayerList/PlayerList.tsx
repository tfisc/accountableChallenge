import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import ShuffleButton from '../../components/ShuffleButton/ShuffleButton';
import {usePlayerListLogic} from '../../hooks/usePlayersListLogic';
import {Player} from '../../interfaces/player.interface';
import style from './PlayerList.style';

const renderItem: React.FC<{item: Player}> = ({item}) => {
  return <PlayerCard player={item} />;
};

const PlayersList: React.FC = () => {
  const navigation = useNavigation();

  const {playerList, playerListLoading, playerListError, refreshPlayerList} =
    usePlayerListLogic();

  useEffect(() => {
    navigation.setOptions({title: 'NBA Players'});
  }, [navigation]);

  if (playerListError) {
    return (
      <>
        <View style={style.centered}>
          <Text>An error occured, please try again later</Text>
        </View>
      </>
    );
  }

  if (playerListLoading) {
    return <ActivityIndicator style={style.centered} size="large" />;
  }

  return (
    <>
      <FlatList
        testID={'playersList'}
        onRefresh={refreshPlayerList}
        refreshing={playerListLoading}
        style={style.container}
        data={playerList}
        renderItem={renderItem}
      />
      <ShuffleButton />
    </>
  );
};

export default PlayersList;
