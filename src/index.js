import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import client from './Client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

