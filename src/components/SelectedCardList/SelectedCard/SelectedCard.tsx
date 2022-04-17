import React, { useContext } from 'react';
import { StaticUriContext } from '../../../common';
import './SelectedCard.scss';

export type Props = {
  uuid: number;
  cardName: string;
  secondName: string;
  cardType: string;
  cardImage: string;
  rareDegree: string;
  onDeleteItem: (uuid: number) => void;
  onClickItem: (uuid: number) => void;
};

const SelectedCard: React.FC<Props> = (props: Props) => {
  const {
    uuid,
    cardName,
    secondName,
    cardImage,
    cardType,
    rareDegree,
    onClickItem,
    onDeleteItem,
  } = props;
  const uri = useContext(StaticUriContext);

  const rootClassName = `SelectedCard ${cardType} ${rareDegree}`;
  const imagePath = `${uri}/images/${cardImage}`;
  const imageAlt = `${cardName}-${secondName}`;

  return (
    <div className={rootClassName}>
      <img
        src={imagePath}
        alt={imageAlt}
        className={'SelectedCard-image'}
        onClick={() => onClickItem(uuid)}
      />
      <div
        onClick={() => onDeleteItem(uuid)}
        className={'SelectedCard-removeButton'}
      />
    </div>
  );
};

export default SelectedCard;
