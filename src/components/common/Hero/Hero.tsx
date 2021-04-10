import { UriContext } from '../../../common';
import React, { useContext } from 'react';
import './Hero.scss';

type Props = {
  name: string;
  secondName: string;
  rareDegree: string;
  image: string;
  action: () => void;
};

const Hero: React.FC<Props> = (props: Props) => {
  const { name, image, secondName, rareDegree } = props;
  const uri = useContext(UriContext);

  return (
    <div className={`Hero`} onClick={() => props.action()}>
      <div className={'heroBackgroundWrapper'}>
        <img
          src={`${uri}/images/${image}`}
          alt={`${name} - ${secondName} background`}
          className={'heroBackground'}
        />
      </div>
      <div className={`heroImage ${rareDegree}`}>
        <img
          src={`${uri}/images/${image}`}
          alt={`${name} - ${secondName}`}
          className={'heroImageContent'}
        />
      </div>
      <div className={'heroLabels'}>
        <div className={'name heroLabel'}>{name}</div>
        <div className={'secondName heroLabel'}>{secondName}</div>
      </div>
    </div>
  );
};
export default Hero;
