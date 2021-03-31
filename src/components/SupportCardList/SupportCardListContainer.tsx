import gql from "graphql-tag";
import React from "react";
import { useSupportCardQuery } from "../../generated/graphql";
import { CORE_SUPPORT_CARD_FIELD } from "../common/fragments";
import { SupportCard } from "../../types";
import SupportCardList from "./SupportCardList";
import "./SupportCardListContainer.css";

gql`
  ${CORE_SUPPORT_CARD_FIELD}
  query supportCard {
    supportCard {
        ...CoreSupportCardField
    }
  }
`;

type Props = {
  onClickItem: (uuid: number) => void,
  cardType: string
}

const SupportCardListContainer: React.FC<Props> = (props: Props) => {
  const { loading, error, data } = useSupportCardQuery();
  if (loading) return (<p>loading...</p>)
  if (error) return (<p>error</p>)
  if (data == null || data.supportCard == null) return (<p>data not exist</p>)

  let cardList: SupportCard[] = data.supportCard.map(x => {
    return {
      uuid: Number(x?.uuid),
      cardName: x?.cardName,
      secondName: x?.secondName,
      rareDegree: x?.rareDegree,
      cardImage: x?.cardImage,
      cardType: x?.cardType,
    } as SupportCard
  });

  if (props.cardType !== "") {
    cardList = data.supportCard.map(x => {
      return {
        uuid: Number(x?.uuid),
        cardName: x?.cardName,
        secondName: x?.secondName,
        rareDegree: x?.rareDegree,
        cardImage: x?.cardImage,
        cardType: x?.cardType,
      } as SupportCard
    }).filter(x => x.cardType === props.cardType)
  }

  return (
    <div className={"SupportCardListContainer"} >
      <SupportCardList cards={cardList} onClickItem={props.onClickItem} />
    </div>
  );
};

export default SupportCardListContainer;
