import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './Info.scss';

type Props = {
  match: any;
};

const InfoPageRouter: React.FC<Props> = (props: Props) => {
  const { match } = props;
  const path = match.path;

  return (
    <div className="InfoPage">
    </div>
  );
};
// /uma/:id/detail
export default InfoPageRouter;
