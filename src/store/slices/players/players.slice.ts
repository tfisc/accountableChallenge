import {createSlice} from '@reduxjs/toolkit';
import {Player} from '../../../interfaces/player.interface';
import type {RootState} from '../../store';
import {
  getAllPlayersFulfilled,
  getAllPlayersPending,
  getAllPlayersRejected,
  removePlayerReducer,
  shuffleReducer,
} from './players.reducer';
import {getPlayersThunk} from './players.thunk';

export interface PlayersState {
  players: Player[];
  loading: boolean;
  error: boolean;
}

const initialState: PlayersState = {
  players: [],
  loading: false,
  error: false,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    shuffle: shuffleReducer,
    removePlayer: removePlayerReducer,
  },
  extraReducers: {
    [getPlayersThunk.pending.toString()]: getAllPlayersPending,
    [getPlayersThunk.rejected.toString()]: getAllPlayersRejected,
    [getPlayersThunk.fulfilled.toString()]: getAllPlayersFulfilled,
  },
});

export const selectPlayers = (state: RootState) => state.players.players;
export const selectLoading = (state: RootState) => state.players.loading;
export const selectError = (state: RootState) => state.players.error;

export const {shuffle, removePlayer} = playersSlice.actions;

export default playersSlice.reducer;
