import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InfoNavigation } from './InfoNavigation';
import './Info.scss';

const InfoPage = () => {
  return <BrowserRouter>
    <div className="InfoPage">
      <div className="InfoContents">
        <Route exact={true} path={""} />
      </div>
      <InfoNavigation />
    </div>
  </BrowserRouter>
};

export default InfoPage;
