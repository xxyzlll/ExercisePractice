import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <Router>
          <App/>
        </Router>
      </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
