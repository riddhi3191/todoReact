import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/component/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import todoActions from '../src/reducer/makeTodos'
 
ReactDOM.render(<Provider store={createStore(todoActions.reducer)}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
