import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Scaffold } from '../../components/common/Scaffold';
import Main from './Main';

type Props = {
  match: any;
};

const MainPageRouter: React.FC<Props> = (props: Props) => {
  const { match } = props;
  return <Route exact path={match.path} component={Main} />;
};

export default MainPageRouter;
