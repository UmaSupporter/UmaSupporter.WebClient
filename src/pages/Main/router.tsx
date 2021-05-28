import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { InfoPage } from '../Info';
import Main from './Main';

const MainPageRouter: React.FC = () => {
  return <BrowserRouter>
    <Route
      exact
      path="/"
      component={Main} />
    <Route
      exact
      path="/info"
      component={InfoPage} />
  </BrowserRouter>
};

export default MainPageRouter;
