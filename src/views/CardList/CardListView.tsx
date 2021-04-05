import React, { useReducer } from "react"
import { convertToCardType } from "../../common/utils"
import { CardTypeFilterComponent } from "../../components/CardFilter"
import SelectedCardListContainer from "../../components/SelectedCardList"
import SupportCardListContainer from "../../components/SupportCardList"
import { CARD_TYPE } from "../../types"
import "./CardList.scss"
import { filterReducer } from "./CardListReducer"

type Props = {
  selectedList: number[],
  onClickItem:(uuid:number)=>void,
  onDeleteItem:(uuid:number)=>void,
  onDoubleClickItem:(uuid:number)=>void,
  onResetItem:()=>void,
  showCardPage:boolean
}

const CardListView: React.FC<Props> = (props: Props) => {
  const {selectedList, onClickItem, onDeleteItem, onDoubleClickItem, onResetItem} = props
  const [state, dispatch] = useReducer(filterReducer, {filters: new Set<CARD_TYPE>()});

  const toggleFilter = (cardType: CARD_TYPE) =>  dispatch({ type: 'TOGGLE_FILTER', payload: cardType })
  const currentCardType = Object.values(CARD_TYPE).map(x => {return {
    cardType: convertToCardType(x),
    isSelected: state.filters.has(convertToCardType(x))
  }});

  return <div className={"CardList"}>
    <div className={"MainPageCardList"}>
      <p className={"MainPagelabel"}>
        카드 리스트
          </p>
    </div>
    <CardTypeFilterComponent cardTypes={currentCardType} onClickType={toggleFilter}/>
    <div className={"CardListGrid"}>
      <SupportCardListContainer
        onClickItem={onClickItem}
        onDoubleClickItem={onDoubleClickItem}
        selectedList={selectedList}
        filters={state.filters}
      />
    </div>
    <div>
      <p className={"MainPagelabel"}>
        즐겨찾기
      </p>
      <SelectedCardListContainer
        onClickItem={onClickItem}
        selectedList={selectedList}
        onDeleteItem={onDeleteItem}
        onResetItem={onResetItem} />
    </div>
  </div>
}
export default CardListView
