import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import Reducer from "./Reducer"



let store = createStore(Reducer)

let jsx =   <Provider store={store}>
            <App />
            </Provider>




ReactDOM.render(jsx, document.getElementById('root'));


serviceWorker.unregister();
