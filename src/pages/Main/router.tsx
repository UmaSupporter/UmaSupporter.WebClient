import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Scaffold } from '../../components/common/Scaffold';
import { InfoPage } from '../Info';
import Main from './Main';

const MainPageRouter: React.FC = () => {
  return (

    <BrowserRouter>
      <Scaffold>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/info"} component={InfoPage} />
      </Scaffold>
    </BrowserRouter>
  )
};

export default MainPageRouter;
