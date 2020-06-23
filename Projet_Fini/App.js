/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'

import { store } from './src/redux/store'
import Counter from './src/Counter'
import CounterRedux from './src/CounterRedux'

const App = props => {
  return (
    <Provider store={store}>
       <CounterRedux />
    </Provider>
  )
}


export default App;
