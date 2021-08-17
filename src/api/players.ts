import axios, {AxiosResponse} from 'axios';
import {Player} from '../interfaces/player.interface';

const instance = axios.create();

instance.interceptors.response.use((res: AxiosResponse) => {
  return res.data.data;
});

export const getAllPlayers = (): Promise<Player[]> => {
  return instance.get('https://www.balldontlie.io/api/v1/players');
};
