import gql from "graphql-tag";
import React, { useReducer } from "react";
import { useSupportCardQuery } from "../../generated/graphql";
import { CORE_SUPPORT_CARD_FIELD } from "../common/fragments";
import { CARD_TYPE, SupportCard } from "../../types";
import SupportCardList from "./SupportCardList";
import { rareDegreeCompare } from "../../common/utils";
import { filterReducer } from "./SupportCardListReducer";

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
  onDoubleClickItem: (uuid: number) => void,
  selectedList: Array<Number>
}

const SupportCardListContainer: React.FC<Props> = (props: Props) => {
  const { loading, error, data } = useSupportCardQuery();
  const [state, dispatch] = useReducer(filterReducer, {filters: new Set<CARD_TYPE>()});
  if (loading) return (<p>loading...</p>)
  if (error) return (<p>error</p>)
  if (data == null || data.supportCard == null) return (<p>data not exist</p>)


  const addFilter = (cardType: CARD_TYPE) =>  dispatch({ type: 'SET_FILTER', payload: cardType })
  const removeFilter = (cardType: CARD_TYPE) =>  dispatch({ type: 'REMOVE_FILTER', payload: cardType })
  const toggleFilter = (cardType: CARD_TYPE) =>  dispatch({ type: 'TOGGLE_FILTER', payload: cardType })
  const resetFilter = () =>  dispatch({ type: 'RESET_FILTER' })

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

  return (
    // <div className={"SupportCardListContainer"} >
    <>
      <SupportCardList 
      cards={cardList}
      onClickItem={props.onClickItem}
      selectedList={props.selectedList}
      onDoubleClickItem={props.onDoubleClickItem}/>
    </>
  );
};

export default SupportCardListContainer;
