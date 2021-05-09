import React from 'react';
import { Link } from 'react-router-dom';
import { InfoNavigationItemProps } from './Props';
import './InfoNavigationItem.scss';

const InfoNavigationItem = (props: InfoNavigationItemProps) => {
  const { name, pathname } = props;
  return (
    <Link to={pathname} className={'InfoNavigationItem'}>
      {name}
    </Link>
  );
};

export default InfoNavigationItem;
