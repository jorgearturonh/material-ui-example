import React from 'react';
import {render} from 'react-dom';
import './styles/master.css';
import AppRouter from './AppRouter';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/';

//Tema del Programa
// Primary = Color Anaranjado
// Secondary = Color Letras
const theme = createMuiTheme({
    palette: {
        primary: { main: '#F48A8B' },
        secondary:{ main: '#375169'},
        lightgray:{ main:'red'}
    },
    breakpoints: {
      keys: ["xs","sm", "md", "lg", "xl",],
      values: {
        xl: 1920,
        lg: 1280,
        md: 960,
        sm: 320,
        xs: 0,        
      }
      },
});

// Estado inicial de Redux, utilizaremos contenedores redux por defecto
const initialState = 
{
    txData :[],    
}

// Store Redux
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
 <MuiThemeProvider theme={theme}>
   <Provider store={store}>
         <AppRouter/>
   </Provider>
</MuiThemeProvider>, document.getElementById('app'));

