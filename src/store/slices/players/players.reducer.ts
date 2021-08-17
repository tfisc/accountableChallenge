import {PayloadAction} from '@reduxjs/toolkit';
import {Player} from '../../../interfaces/player.interface';
import {PlayersState} from './players.slice';

export const getAllPlayersPending = (state: PlayersState): void => {
  state.loading = true;
  state.error = false;
};

export const getAllPlayersFulfilled = (
  state: PlayersState,
  {payload}: PayloadAction<Player[]>,
): void => {
  state.players = payload;
  state.loading = false;
  state.error = false;
};

export const getAllPlayersRejected = (state: PlayersState): void => {
  state.players = [];
  state.loading = false;
  state.error = true;
};

export const shuffleReducer = (state: PlayersState): void => {
  state.players = state.players.sort(() => 0.5 - Math.random());
};

export const removePlayerReducer = (
  state: PlayersState,
  {payload}: PayloadAction<{id: number}>,
): void => {
  const playerToRemoveIndex = state.players
    .map(player => player.id)
    .indexOf(payload.id);
  if (playerToRemoveIndex !== -1) {
    state.players.splice(playerToRemoveIndex, 1);
  }
};
