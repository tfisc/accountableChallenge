import {useEffect} from 'react';
import {Player} from '../interfaces/player.interface';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {
  selectLoading,
  selectError,
  selectPlayers,
} from '../store/slices/players/players.slice';
import {getPlayersThunk} from '../store/slices/players/players.thunk';

type PlayerListData = {
  playerList: Player[];
  playerListLoading: boolean;
  playerListError: boolean;
  refreshPlayerList: () => void;
};

export const usePlayerListLogic = (): PlayerListData => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector;
  const playerListLoading = selector(selectLoading);
  const playerListError = selector(selectError);
  const playerList = selector(selectPlayers);
  useEffect(() => {
    dispatch(getPlayersThunk());
  }, [dispatch]);

  return {
    playerList,
    playerListLoading,
    playerListError,
    refreshPlayerList: () => dispatch(getPlayersThunk()),
  };
};
