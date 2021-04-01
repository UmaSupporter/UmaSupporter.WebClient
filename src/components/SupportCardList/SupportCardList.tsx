import React from "react";
import SupportCardComponent from "./SupportCard/SupportCard";
import { SupportCard } from "../../types";
import "./SupportCardList.scss";

type Props = {
  cards: SupportCard[]
  onClickItem: (uuid: number) => void
  selectedList: Array<Number>
}

const SupportCardList: React.FC<Props> = (props: Props) => {
  return (
    <div className={"SupportCardListWrapper"}>
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
              cardType={x.cardType}
              selected={props.selectedList.includes(x.uuid)}
              />
          //  </span>
          )}
      </div>
    </div>
  );
};

export default SupportCardList;
