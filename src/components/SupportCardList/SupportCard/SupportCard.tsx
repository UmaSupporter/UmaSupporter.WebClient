import React, { useContext } from "react";
import { UriContext } from "../../../common";
import { SupportCard } from "../../../types";
import { getCardTypeImageName, convertToCardType } from "../../../common/utils";
import "./SupportCard.scss";

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
  onDoubleClickItem: (uuid:number) => void
  selected: boolean
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardType, cardImage, rareDegree } = props;
  const uri = useContext(UriContext);
  
  return (
    <div className="SupportCardWrapper">
      <div
        className={`SupportCard-BackPanel ${cardType} ${rareDegree}`}
        onClick={(e) => { e.stopPropagation();props.onClickItem(uuid)}}>
        <img
          alt={`${cardName}-${secondName}`}
          src={`${uri}/images/${cardImage}`}
          className={`SupportCard`}
        />
      </div>
      <div className={"SupportCardAuxInfo"}>
        <svg className={`SupportCardLikeIcon ${props.selected?"liked":""}`} onClick={(e) => {e.stopPropagation(); props.onDoubleClickItem(uuid)}} viewBox="0 0 32 32">
          <path d="M22.93,0a8.18,8.18,0,0,1,3.44.74,8.71,8.71,0,0,1,2.77,2,9.78,9.78,0,0,1,1.84,3,10.27,10.27,0,0,1,.66,3.71,11.17,11.17,0,0,1-1,4.61A20.25,20.25,0,0,1,28,18.46a54.28,54.28,0,0,1-4.28,4.65c-1.67,1.62-3.51,3.44-5.54,5.44l-2.31,2.31-2.3-2.27q-3.06-3-5.55-5.48a54.28,54.28,0,0,1-4.28-4.65A19.86,19.86,0,0,1,1,14.1,11.17,11.17,0,0,1,0,9.49,10.27,10.27,0,0,1,.66,5.78a9.78,9.78,0,0,1,1.84-3,8.71,8.71,0,0,1,2.77-2A8.18,8.18,0,0,1,8.71,0a8.53,8.53,0,0,1,3.93,1,9.37,9.37,0,0,1,3.18,2.65A9.37,9.37,0,0,1,19,1,8.53,8.53,0,0,1,22.93,0Z"/>
        </svg>
        <img className={`SupportCardTypeIcon`} src={`${uri}/images/${getCardTypeImageName(convertToCardType(cardType))}`} alt={cardType}/>
      </div>
    </div>
  )
}

export default SupportCardComponent;
