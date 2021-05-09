import React from 'react';
import SupportCardComponent from './SupportCard/SupportCard';
import { SupportCard } from '../../types';
import './SupportCardList.scss';

type Props = {
  cards: SupportCard[];
  onClickItem: (uuid: number) => void;
  onFavoriteItem: (uuid: number) => void;
  selectedList: Array<Number>;
};

const SupportCardList: React.FC<Props> = (props: Props) => {
  const { onClickItem, onFavoriteItem, selectedList } = props;
  return (
    <div className={'SupportCardListWrapper'}>
      <div className={'SupportCardList'}>
        {props.cards.map((x, i) => {
          const {
            uuid,
            cardName,
            secondName,
            rareDegree,
            cardImage,
            cardType,
          } = x;
          return (
            <SupportCardComponent
              key={i}
              onClickItem={onClickItem}
              onDoubleClickItem={onFavoriteItem}
              uuid={uuid}
              cardName={cardName}
              secondName={secondName}
              rareDegree={rareDegree}
              cardImage={cardImage}
              cardType={cardType}
              selected={selectedList.includes(uuid)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SupportCardList;
