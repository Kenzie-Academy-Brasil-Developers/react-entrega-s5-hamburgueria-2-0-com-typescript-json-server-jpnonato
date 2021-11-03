import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {AppProvider} from './provider/appProvider'
import { ThemeProvider } from '@material-ui/core'
import { mainTheme } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
