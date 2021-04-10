import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainRouter from './router';
import UmaApolloProvider from './apollo';
import { baseUri, UriContext } from './common';
import './components/common/styles/App.scss';

ReactDOM.render(
  <UmaApolloProvider>
    <BrowserRouter>
      <UriContext.Provider value={baseUri}>
        <MainRouter />
      </UriContext.Provider>
    </BrowserRouter>
  </UmaApolloProvider>,
  document.getElementById('root')
);
