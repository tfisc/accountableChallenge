import * as React from 'react';
import {Provider} from 'react-redux';
import {cleanup, render} from '@testing-library/react-native';
import {store} from '../src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import PlayerDetails from '../src/pages/PlayerDetails/PlayerDetails';

afterAll(cleanup);

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      setOptions: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        player: {
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
      },
    }),
  };
});

jest.mock('../src/store/slices/players/players.slice', () => ({
  removePlayer: jest.fn(),
}));

describe('PlayersDetails component test', () => {
  const component = (
    <NavigationContainer>
      <Provider store={store}>
        <PlayerDetails />
      </Provider>
    </NavigationContainer>
  );

  const {findByText} = render(component);
  test('Renders page elements correctly', async () => {
    expect(await findByText('LeBron James')).toBeTruthy();
    expect(await findByText('Los Angeles Lakers')).toBeTruthy();
    expect(await findByText('F')).toBeTruthy();
    expect(await findByText("6'8ft")).toBeTruthy();
    expect(await findByText('REMOVE FROM LIST')).toBeTruthy();
  });
});
