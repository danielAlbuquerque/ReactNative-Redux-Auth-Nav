import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends React.Component {

  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBtfeUNoIA4WoM54c_Wx3huOh9T4N7xVHA',
      authDomain: 'todo-17b62.firebaseapp.com',
      databaseURL: 'https://todo-17b62.firebaseio.com',
      projectId: 'todo-17b62',
      storageBucket: 'todo-17b62.appspot.com',
      messagingSenderId: '112904404965'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
