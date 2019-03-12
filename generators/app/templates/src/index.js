import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createElectronHandler, registerLogHandler} from './logger';
import {configureStore} from './state/store';

// You can register as many log handlers as you like.
// These attach to the standard console so you can forward logs to your
// favorite service.
// By default logs are forwarded to electron's main thread
// where some additional boilerplate saves it to a file.
registerLogHandler(createElectronHandler('log-event'));

// Just testing the log here!
console.log('hello world');

// Redux is configured and injected into your app by default.
// If you do not want to use redux you can pass <App/> directly into
// the render method and delete the `state/` folder.
const store = configureStore();
const ReduxApp = <Provider store={store}><App/></Provider>;
ReactDOM.render(ReduxApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
