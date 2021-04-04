import React, { useContext } from "react";
import { UriContext } from "../../../common";
import { SupportCard } from "../../../types";
import "./SupportCard.scss";

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
  onDoubleClickItem: (uuid:number) => void
  selected: boolean
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardType, cardImage, rareDegree } = props;
  const uri = useContext(UriContext);
  console.log(uri)
  
  return (
    <button
      className={`SupportCard-BackPanel ${cardType} ${rareDegree}`}
      onClick={() => props.onClickItem(uuid)}
      onDoubleClick={()=>props.onDoubleClickItem(uuid)}>
      <img
        alt={`${cardName}-${secondName}`}
        src={`${uri}/images/${cardImage}`}
        className={`SupportCard`}
      />
    </button>
  )
}

export default SupportCardComponent;
