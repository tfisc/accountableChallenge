import React from 'react';

import {Provider} from 'react-redux';
import {Router} from './src/components/Router/Router';

import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
