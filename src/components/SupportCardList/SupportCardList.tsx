import React from "react";
import SupportCardComponent from "./SupportCard/SupportCard";
import { SupportCard } from "../../types";
import "./SupportCardList.css";

type Props = {
  cards: SupportCard[]
  onClickItem: (uuid: number) => void
}

const SupportCardList: React.FC<Props> = (props: Props) => {
  return (
    <div className={"SupportCardList"}>
      {props.cards.map(x =>
        // <span key={x.uuid} style={{ display: "inline" }} >
          <SupportCardComponent
            onClickItem={props.onClickItem}
            uuid={x.uuid}
            cardName={x.cardName}
            secondName={x.secondName}
            rareDegree={x.rareDegree}
            cardImage={x.cardImage}
            cardType={x.cardType} />
        // </span>
        )}
    </div>
  );
};

export default SupportCardList;
