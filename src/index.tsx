import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import MainRouter from "./router";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Header />
      <MainRouter />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

