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
    <div>
      <div>
        <div className={"MainPagelabel"}>
          <span>즐겨찾기</span>
          <div className={"resetFavorite"} onClick={onResetItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" stroke-width="4">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </div>
        </div>
      </div>
      <SelectedCardListContainer
        onClickItem={onClickItem}
        selectedList={selectedList}
        onDeleteItem={onDeleteItem}
        onResetItem={onResetItem} />
    </div>
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
    
  </div>
}
export default CardListView