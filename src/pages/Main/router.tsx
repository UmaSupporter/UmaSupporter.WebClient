import { Route } from 'react-router';
import Main from './Main';

type Props = {
  match: any;
};

const MainPageRouter: React.FC<Props> = (props: Props) => {
  const { match } = props;
  return <Route exact path={match.path} component={Main} />;
};

export default MainPageRouter;
