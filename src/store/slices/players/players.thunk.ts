import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAllPlayers} from '../../../api/players';

export const getPlayersThunk = createAsyncThunk('players/getAll', async () => {
  return await getAllPlayers();
});
