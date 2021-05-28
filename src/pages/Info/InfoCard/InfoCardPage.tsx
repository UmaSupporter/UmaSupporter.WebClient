import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const InfoCard = () => {
  const location = useLocation().pathname;
  const isSelected = location.includes('selected');
  const history = useHistory();

  return (
    <div className={'InfoCardPage'}>
      <div>여기에 카드 리스트 컴포넌트 입력</div>
      {isSelected && <div>여기에 컴포넌트 입력</div>}
    </div>
  );
};

export default InfoCard;
