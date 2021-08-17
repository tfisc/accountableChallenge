import * as React from 'react';
import {Provider} from 'react-redux';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {store} from '../src/store/store';
import PlayersList from '../src/pages/PlayerList/PlayerList';
import {NavigationContainer} from '@react-navigation/native';
import {getAllPlayers} from '../src/api/players';

afterAll(cleanup);

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      setOptions: jest.fn(),
    }),
  };
});
jest.mock('../src/api/players', () => ({
  getAllPlayers: jest.fn().mockResolvedValue([
    {
      id: 237,
      first_name: 'LeBron',
      last_name: 'James',
      position: 'F',
      height_feet: 6,
      height_inches: 8,
      weight_pounds: 250,
      team: {
        id: 14,
        abbreviation: 'LAL',
        city: 'Los Angeles',
        conference: 'West',
        division: 'Pacific',
        full_name: 'Los Angeles Lakers',
        name: 'Lakers',
      },
    },
  ]),
}));

describe('PlayersList component test', () => {
  const component = (
    <NavigationContainer>
      <Provider store={store}>
        <PlayersList />
      </Provider>
    </NavigationContainer>
  );

  const {findByText, findByTestId} = render(component);
  test('Renders page elements correctly', async () => {
    expect(await findByText('SHUFFLE')).toBeTruthy();
    expect(await findByTestId('playersList')).toBeTruthy();
    expect(await findByText('LeBron James')).toBeTruthy();
    expect(getAllPlayers).toHaveBeenCalledTimes(1);
    fireEvent(await findByTestId('playersList'), 'onRefresh');
    expect(getAllPlayers).toHaveBeenCalledTimes(2);
  });
});
