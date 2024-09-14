import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/navbar/ThemeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') // Remove TypeScript-specific syntax
);

root.render(

  <React.StrictMode>
      <ThemeProvider>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
