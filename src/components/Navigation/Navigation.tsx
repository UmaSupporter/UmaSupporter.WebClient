import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
  const location = useLocation().pathname;
  return <div className="Navigation">
    <div className={`highlighter ${location}`} />
    <Link to="/">
      <div>Event</div>
    </Link>
    <Link to="/info">
      <div>Info</div>
    </Link>
  </div>;
};

export default Navigation;
