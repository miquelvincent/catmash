import React from 'react';
import ReactDOM from 'react-dom';
import {StoreProvider} from './Store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Layout, gradient} from './style';

ReactDOM.render(
  <StoreProvider>
    <Layout gradient={gradient}>
      <App />
    </Layout>
  </StoreProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
