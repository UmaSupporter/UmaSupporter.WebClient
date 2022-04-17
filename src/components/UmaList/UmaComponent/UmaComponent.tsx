import { Uma } from '../../../types';
import { StaticUriContext } from '../../../common';
import React, { useContext } from 'react';
import './UmaComponent.scss';

type Props = {
  uma: Uma;
  clickItem: (uuid: number) => void;
};

const UmaComponent: React.FC<Props> = (props: Props) => {
  const { uuid, umaImage, umaName, secondName } = props.uma;

  const uri = useContext(StaticUriContext);

  const imagePath = `${uri}/images/${umaImage}`;
  const imageAlt = `${umaName} ${secondName}`;

  return (
    <div className={'UmaComponent'} onClick={() => props.clickItem(uuid)}>
      <img className={'umaComponentImage'} src={imagePath} alt={imageAlt} />
    </div>
  );
};

export default UmaComponent;
