import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import UmaListContainer from '../../../components/UmaList';
import InfoUmaDetailPage from './InfoUmaDetail/InfoUmaDetail';
import "./InfoUmaPage.scss"


const InfoUmaPage = () => {

  const location = useLocation().pathname;
  const isSelected = location.includes("selected");
  const history = useHistory();
  console.log(location);

  return <div className="InfoUmaPage">
    <UmaListContainer
      onClickItem={(uuid: number) => history.push(`/info/uma/selected/${uuid}`)}
      showUmaPage={false}
    />
    {isSelected && <InfoUmaDetailPage />}
  </div>
}

export default InfoUmaPage;