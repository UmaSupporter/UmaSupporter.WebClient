import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InfoNavigation } from './InfoNavigation';
import './Info.scss';
import { InfoSkill } from './InfoSkill';
import { InfoCard } from './InfoCard';
import { InfoUma } from './InfoUma';

const InfoPage = () => {
  return <BrowserRouter>
    <div className="InfoPage">
      <div className="InfoContents">
        <Route exact={true} path={"/info/skill"} component={InfoSkill} />
        <Route exact={true} path={"/info/uma"} component={InfoUma} />
        <Route exact={true} path={"/info/uma/detail/:id"} component={InfoUma} />
        <Route exact={true} path={"/info/card"} component={InfoCard} />
      </div>
      <InfoNavigation />
    </div>
  </BrowserRouter>
};

export default InfoPage;
