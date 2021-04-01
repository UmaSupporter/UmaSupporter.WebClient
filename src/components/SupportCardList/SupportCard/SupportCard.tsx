import React, { useContext } from "react";
import { UriContext } from "../../../common";
import { SupportCard } from "../../../types";
import "./SupportCard.scss";

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
  selected: boolean
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardType, cardImage, selected, rareDegree } = props;
  const uri = useContext(UriContext);
  console.log(uri)
  
  return (
    <div className={`SupportCard-BackPanel ${cardType} ${selected?"selected":"available"} ${rareDegree}`}>
      <img 
      onClick={() => props.onClickItem(uuid)} 
      alt={`${cardName}-${secondName}`} 
      src={`${uri}/images/${cardImage}`}
      className={`SupportCard`} />
      
    </div>
  );
};

export default SupportCardComponent;
