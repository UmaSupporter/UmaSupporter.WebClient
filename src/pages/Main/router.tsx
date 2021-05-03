import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Scaffold } from '../../components/common/Scaffold';
import { InfoPage } from '../Info';
import Main from './Main';

const MainPageRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Route
        exact={true}
        path={"/"}
        render={() => {
          return <Scaffold>
            <Main />
          </Scaffold>
        }}
      />
      <Route
        exact={true}
        path={"/info"}
        render={() => {
          return <Scaffold>
            <InfoPage />
          </Scaffold>
        }}
      />
    </BrowserRouter>
  )
};

export default MainPageRouter;
