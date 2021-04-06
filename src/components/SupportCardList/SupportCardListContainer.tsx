import gql from "graphql-tag";
import React from "react";
import { useSupportCardQuery } from "../../generated/graphql";
import { CORE_SUPPORT_CARD_FIELD } from "../common/fragments";
import { CARD_TYPE, SupportCard } from "../../types";
import SupportCardList from "./SupportCardList";
import { convertToCardType, rareDegreeCompare } from "../../common/utils";
import useSelectedCard from "../common/stores/useSelectedCard";
import shallow from "zustand/shallow";

gql`
  ${CORE_SUPPORT_CARD_FIELD}
  query supportCard {
    supportCard {
        ...CoreSupportCardField
    }
  }
`;

type Props = {
  filters: Set<CARD_TYPE>,
}

const SupportCardListContainer: React.FC<Props> = (props) => {
  const [selectedList, onClickItem, onDoubleClickItem] = 
    useSelectedCard(state => [state.favoriteCardUuids, state.setCard, state.toggleFavoriteCard], shallow)
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
  }).sort(rareDegreeCompare).reverse();

  if(props.filters.size !== 0){
    cardList = cardList.filter(x => props.filters.has(convertToCardType(x.cardType)))
  }
  return (
    // <div className={"SupportCardListContainer"} >
    <>
      <SupportCardList 
      cards={cardList}
      onClickItem={onClickItem}
      selectedList={selectedList}
      onDoubleClickItem={onDoubleClickItem}/>
    </>
  );
};

export default SupportCardListContainer;
