import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
  const location = useLocation().pathname;

  const currentLocation = (location: string) => {
    if (location.includes("info"))
      return "/info"
    return "/"
  }

  return <div className="Navigation">
    <div className={`highlighter ${currentLocation(location)}`} />
    <Link to="/" className={"navItem"}>
      <div>이벤트</div>
    </Link>
    <Link to="/info" className={"navItem"}>
      <div>정보</div>
    </Link>
  </div>;
};

export default Navigation;
