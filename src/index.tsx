import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import MainRouter from "./router";
// import Header from "./components/Header";
import UmaApolloProvider from "./apollo";
import { baseUri, UriContext } from "./common";
import "./components/common/styles/App.scss"

ReactDOM.render(
  <UmaApolloProvider>
    <BrowserRouter>
    <UriContext.Provider value={baseUri}>
      {/* <Header /> */}
      <MainRouter />
    </UriContext.Provider>
    </BrowserRouter>
  </UmaApolloProvider>,
  document.getElementById("root")
);
