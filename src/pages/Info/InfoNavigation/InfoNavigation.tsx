import React from 'react';
import "./InfoNavigation.scss"
import { InfoNavigationItem } from './InfoNavigationItem';
import { InfoNavigationItemProps } from './InfoNavigationItem/Props';

const InfoNavigation = () => {
  const InfoNavigationItems: InfoNavigationItemProps[] = [
    { name: '우마무스메', pathname: '/info/uma' },
    { name: '카드', pathname: '/info/card' },
    { name: '스킬', pathname: '/info/skill' }
  ]
  return <div className='InfoNavigation'>
    <div className='InfoNavigationHighlighter'></div>
    {InfoNavigationItems.map(x => <InfoNavigationItem {...x} />)}
  </div>
}

export default InfoNavigation