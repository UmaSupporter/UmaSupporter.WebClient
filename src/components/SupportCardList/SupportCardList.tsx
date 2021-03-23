import React from "react";
import SupportCardComponent, { SupportCard } from "./SupportCard/SupportCard";

type Props = {
  cards: SupportCard[]
  onClickItem: (uuid: number) => void
}

const SupportCardList: React.FC<Props> = (props: Props) => {
  return (
    <ul>
      {props.cards.map(x =>
        <li key={x.uuid} style={{ display: "inline" }} >
          <SupportCardComponent
            onClickItem={props.onClickItem}
            uuid={x.uuid}
            cardName={x.cardName}
            secondName={x.secondName}
            rareDegree={x.rareDegree}
            cardImage={x.cardImage}
            cardType={x.cardType} />
        </li>)}
    </ul>
  );
};

export default SupportCardList;
