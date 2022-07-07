import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import FriendSearchView from '../../views/FriendSearch/FriendSearchView';
import './Info.scss';

type Props = {
  match: any;
};

const InfoPageRouter: React.FC<Props> = (props: Props) => {
  const { match } = props;
  const path = match.path;

  return (
    <div className="InfoPage">
      <FriendSearchView />
    </div>
  );
};
// /uma/:id/detail
export default InfoPageRouter;
