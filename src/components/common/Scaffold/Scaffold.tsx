import React from 'react';
import Div100vh from 'react-div-100vh';
import { Navigation } from '../../Navigation';
import { Titlebar } from '../../Titlebar';
import { ScaffoldProps } from './Props';
import './Scaffold.scss';

const Scaffold = (props: ScaffoldProps) => {
  const { children } = props;

  return (
    <Div100vh
      className={'Scaffold'}
      style={{
        height: document.documentElement?.clientHeight || window.innerHeight,
      }}
    >
      <Titlebar />
      <div className={'ScaffoldContent'}>{children}</div>
      <Navigation />
    </Div100vh>
  );
};

export default Scaffold;
