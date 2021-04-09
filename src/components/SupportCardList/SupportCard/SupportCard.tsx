import React, { useContext } from "react";
import { UriContext } from "../../../common";
import { SupportCard } from "../../../types";
import { getCardTypeImageName, convertToCardType } from "../../../common/utils";
import "./SupportCard.scss";
import like from "../../../img/like_sm.png";
import dislike from "../../../img/dislike_sm.png";

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
  onDoubleClickItem: (uuid: number) => void
  selected: boolean
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardType, cardImage, rareDegree } = props;
  const uri = useContext(UriContext);

  return (
    <div className="SupportCardWrapper">
      {
        <img src={(props.selected) ? like : dislike} className={`SupportCardLikeIcon`} alt={(props.selected) ? "like" : "dislike"} onClick={(e) => { e.stopPropagation(); props.onDoubleClickItem(uuid) }} />
      }
      <img className={`SupportCardTypeIcon`} src={`${uri}/images/${getCardTypeImageName(convertToCardType(cardType))}`} alt={cardType} />
      <div
        className={`SupportCard-BackPanel ${cardType} ${rareDegree}`}
        onClick={(e) => { e.stopPropagation(); props.onClickItem(uuid) }}>

        <img
          alt={`${cardName}-${secondName}`}
          src={`${uri}/images/${cardImage}`}
          className={`SupportCard`}
        />
      </div>
    </div>
  )
}

export default SupportCardComponent;
