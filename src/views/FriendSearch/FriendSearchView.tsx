import React from 'react';
import { CardFilterContainer } from '../../components/CardFilter';
import TraitList from '../../components/TraitList';
import './FriendSearch.scss';

const FriendSearchView: React.FC = () => {
  return (
    <div className={'FriendSearch'}>
      <div>
        <div>
          <div className={'MainPagelabel'}>
            <span>필터</span>
          </div>
          <CardFilterContainer />
          <TraitList />
          <div className={'MainPagelabel'}>
            <span>목록</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FriendSearchView;
