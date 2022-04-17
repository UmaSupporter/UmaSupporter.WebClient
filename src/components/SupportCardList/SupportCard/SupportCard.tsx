import React, { useContext } from 'react';
import { StaticUriContext } from '../../../common';
import { SupportCard } from '../../../types';
import { getCardTypeImageName, convertToCardType } from '../../../common/utils';
import './SupportCard.scss';
import like from '../../../img/like_sm.png';
import dislike from '../../../img/dislike_sm.png';

type Props = SupportCard & {
  onClickItem: (uuid: number) => void;
  onDoubleClickItem: (uuid: number) => void;
  selected: boolean;
};

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const {
    uuid,
    cardName,
    secondName,
    cardType,
    cardImage,
    rareDegree,
    selected,
    onDoubleClickItem,
  } = props;

  const uri = useContext(StaticUriContext);
  const likeIcon = selected ? like : dislike;
  const likeIconAlt = selected ? 'like' : 'dislike';

  const supportCardTypeIcon = `${uri}/images/${getCardTypeImageName(
    convertToCardType(cardType)
  )}`;

  const supportCardImage = `${uri}/images/${cardImage}`;
  const supportCardImageAlt = `${cardName}-${secondName}`;

  return (
    <div className={'SupportCardWrapper'}>
      <img
        src={likeIcon}
        className={`SupportCardLikeIcon`}
        alt={likeIconAlt}
        onClick={(e) => {
          e.stopPropagation();
          onDoubleClickItem(uuid);
        }}
      />
      <img
        className={`SupportCardTypeIcon`}
        src={supportCardTypeIcon}
        alt={cardType}
      />
      <div
        className={`SupportCard-BackPanel ${cardType} ${rareDegree}`}
        onClick={(e) => {
          e.stopPropagation();
          props.onClickItem(uuid);
        }}
      >
        <img
          src={supportCardImage}
          alt={supportCardImageAlt}
          className={`SupportCard`}
        />
      </div>
    </div>
  );
};

export default SupportCardComponent;
