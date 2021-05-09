import { Scaffold } from './components/common/Scaffold';
import MainPageRouter from './pages/Main/router';
import { Route, Switch } from 'react-router-dom';
import InfoPageRouter from './pages/Info/router';

const MainRouter: React.FC = () => {
  return (
    <Scaffold>
      <Switch>
        <Route exact path={"/"} component={MainPageRouter} />
        <Route path={"/info"} component={InfoPageRouter} />
      </Switch>
    </Scaffold>

  );
};

export default MainRouter;
