import React from 'react';
import './Buff.scss';
import UmaToolTip from './Tooltip';

type Props = {
  buff: string;
  name: string;
  nameKr: string;
  effectKr: string;
  isDebuff: boolean;
};

const Buff: React.FC<Props> = (props: Props) => {
  const { buff, name, nameKr, effectKr, isDebuff } = props;

  return (
    <>
      <UmaToolTip
        title={
          effectKr
        }
        key={`skill/${name}`}
      >
      <div
        className={isDebuff ? 'Debuff' : 'Buff'}
      >
        {buff}({nameKr})
      </div>
      </UmaToolTip>
    </>
  );
};

export default Buff;
