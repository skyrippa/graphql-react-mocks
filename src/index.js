import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import typeDefs from './graphql-type-defs'
import { faker } from '@faker-js/faker'
import resolvers from './graphql-resolvers'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache({
    typePolicies: {
      Mission: {
        fields: {
          sponsors: {
            read() {
              return [...faker.random.words(faker.datatype.number({
                'min': 1,
                'max': 5
              })).split(' ')]
            }
          }
        }
      }
    }
  }),
  typeDefs,
  resolvers,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
