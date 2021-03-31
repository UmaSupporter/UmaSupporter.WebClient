import React, { useContext } from "react";
import { UriContext } from "../../../common";
import { SupportCard } from "../../../types";
import "./SupportCard.css";

type Props = SupportCard & {
  onClickItem: (uuid: number) => void
}

const SupportCardComponent: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName, cardImage } = props;
  const uri = useContext(UriContext);
  console.log(uri)
  return (
    <img 
    onClick={() => props.onClickItem(uuid)} 
    alt={`${cardName}-${secondName}`} 
    src={`${uri}/images/${cardImage}`}
    className={"SupportCard"} />
  );
};

export default SupportCardComponent;
