import { StaticUriContext } from '../../../common';
import React, { useContext } from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import infoIcon from '../../../img/info.svg';

type Props = {
  heroType: string;
  uuid: number;
  name: string;
  secondName: string;
  rareDegree: string;
  image: string;
  action: () => void;
};

const Hero: React.FC<Props> = (props: Props) => {
  const { heroType, uuid, name, image, secondName, rareDegree } = props;
  const uri = useContext(StaticUriContext);

  const linkPath = `/info/${heroType}/selected/${uuid}`;
  const imagePath = `${uri}/images/${image}`;

  return (
    <div className={`Hero`} onClick={() => props.action()}>
      <div className={'heroBackgroundWrapper'}>
        <img
          src={imagePath}
          alt={`${name} - ${secondName} background`}
          className={'heroBackground'}
        />
      </div>
      <div className={`heroImage ${rareDegree}`}>
        <img
          src={imagePath}
          alt={`${name} - ${secondName}`}
          className={'heroImageContent'}
        />
      </div>
      <div className={'heroLabels'}>
        <div className={'name heroLabel'}>{name}</div>
        <div className={'secondName heroLabel'}>{secondName}</div>
      </div>
      <Link to={linkPath} className={'heroToInfo'}>
        <img src={infoIcon} alt={'info'} className={'heroToInfoIcon'} />
      </Link>
    </div>
  );
};

export default Hero;
