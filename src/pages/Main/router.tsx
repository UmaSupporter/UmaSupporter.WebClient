import { Route } from 'react-router';
import Main from './Main';

const MainPageRouter: React.FC = () => {
  return <Route exact path="/" component={Main} />;
};

export default MainPageRouter;
