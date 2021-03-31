import React, { useContext } from "react";
import { UriContext } from "../../../common";
import { SupportCard } from "../../../types";
import "./SupportCard.scss";

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardType, cardImage, selected } = props;
  const uri = useContext(UriContext);
  console.log(uri)
  return (
    <div className={`SupportCard-BackPanel ${cardType} ${selected?"selected":"available"}`}>
      
      <img 
      onClick={() => props.onClickItem(uuid)} 
      alt={`${cardName}-${secondName}`} 
      src={`${uri}/images/${cardImage}`}
      className={`SupportCard`} />
      <div className={"tint"}/>  
    </div>
  );
};

export default SupportCardComponent;
