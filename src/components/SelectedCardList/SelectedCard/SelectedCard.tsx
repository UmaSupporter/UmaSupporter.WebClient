import React, { useContext } from "react";
import { UriContext } from "../../../common";
import  "./SelectedCard.css";

type Props = {
  uuid: number,
  cardName: string,
  secondName: string,
  cardType: string,
  cardImage: string
  onDeleteItem: (uuid: number) => void
}


const SelectedCard: React.FC<Props> = (props: Props) => {
  const { uuid, cardName, secondName,cardType, cardImage } = props;
  const uri = useContext(UriContext);
  return <div className="SelectedCard">
    <img src={`${uri}/images/${cardImage}`} alt={`${cardName}-${secondName}`} className="SelectedCard-image"></img>
    {/* <p>{cardName} / {cardType} / {secondName}</p> */}
    <button onClick={() => props.onDeleteItem(uuid)} className="SelectedCard-removeButton">X</button>
  </div>
}

export default SelectedCard
