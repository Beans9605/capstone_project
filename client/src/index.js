
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import 'core-js'
import Reducer from './_reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const hunel = new HunelCreditCard();

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
const theme = createMuiTheme({
    typography: {
      fontFamily: 'RecipeKorea',
    },
  });
ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >   
        <HunelProvider config={hunel}>
        <BrowserRouter>
        <MuiThemeProvider theme={theme}>

            <App />
            </MuiThemeProvider>
        </BrowserRouter>
        </HunelProvider>
    </Provider>
    , document.getElementById('root')
    );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
