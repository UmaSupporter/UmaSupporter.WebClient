import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { InfoCardPage } from './InfoCard';
import { InfoNavigation } from './InfoNavigation';
import { InfoUmaPage } from './InfoUma';
import './Info.scss';
import { InfoSkillPage } from './InfoSkill';

type Props = {
  match: any;
};

const InfoPageRouter: React.FC<Props> = (props: Props) => {
  const { match } = props;
  const path = match.path;

  return (
    <div className="InfoPage">
      <div className="InfoContents">
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/uma`} />
        </Route>

        <Route path={`${path}/uma/selected/:id`} component={InfoUmaPage} />
        <Route exact path={`${path}/uma`} component={InfoUmaPage} />

        <Route path={`${path}/card/selected/:id`} component={InfoCardPage} />
        <Route exact path={`${path}/card`} component={InfoCardPage} />

        <Route path={`${path}/skill/selected/:id`} component={InfoSkillPage} />
        <Route exact path={`${path}/skill`} component={InfoSkillPage} />
      </div>
      <InfoNavigation />
    </div>
  );
};
// /uma/:id/detail
export default InfoPageRouter;
