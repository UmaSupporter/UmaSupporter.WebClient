import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { InfoCardPage } from './InfoCard';
import { InfoNavigation } from './InfoNavigation';
import { InfoUmaPage } from './InfoUma';
import './Info.scss';
import { InfoSkillPage } from './InfoSkill';

type Props = {
  match: any
}

const InfoPageRouter: React.FC<Props> = (props: Props) => {
  const { match } = props;

  return (
    <div className="InfoPage">
      <div className="InfoContents">
        <Route exact path={`${match.path}`} >
          <Redirect to={`${match.path}/uma`} />
        </Route>

        <Route path={`${match.path}/uma/selected/:id`} component={InfoUmaPage} />
        <Route exact path={`${match.path}/uma`} component={InfoUmaPage} />

        <Route path={`${match.path}/card/selected/:id`} component={InfoCardPage} />
        <Route exact path={`${match.path}/card`} component={InfoCardPage} />

        <Route path={`${match.path}/skill/selected/:id`} component={InfoSkillPage} />
        <Route exact path={`${match.path}/skill`} component={InfoSkillPage} />
      </div>
      <InfoNavigation />
    </div >
  )
};
// /uma/:id/detail
export default InfoPageRouter;
