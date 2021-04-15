import React, { useContext } from 'react';
import { UriContext } from '../../../common';
import './SelectedCard.scss';

type Props = {
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
  const { uuid, cardName, secondName, cardImage, cardType, rareDegree } = props;
  const uri = useContext(UriContext);

  return (
    <div className={`SelectedCard ${cardType} ${rareDegree}`}>
      <img
        src={`${uri}/images/${cardImage}`}
        alt={`${cardName}-${secondName}`}
        className="SelectedCard-image"
        onClick={() => props.onClickItem(uuid)}
      />

      {/* <div
        onClick={() => props.onDeleteItem(uuid)}
        className="SelectedCard-removeButton"
      /> */}
    </div>
  );
};

export default SelectedCard;
