import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { App } from '$components/App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_API_URI,
});

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
          fontFamily: 'Roboto, sans-serif',
        },
      }}
    />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
