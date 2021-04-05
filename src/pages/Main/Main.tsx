import React, { useEffect, useReducer } from "react";
import SupportCardDetailContainer from "../../components/SupportCardDetail";
import UmaListContainer from "../../components/UmaList";
import "./Main.scss";
import UmaDetailContainer from "../../components/UmaDetail";
import { Mixpanel, TRACK } from "../../common/mixpanel";
import CardListView from "../../views/CardList";

type SetUmaAction = {
  type: 'SET_UMA_ACTION',
  payload: number
}

type AppendAction = {
  type: 'APPEND_CARD',
  payload: number
}

type DeleteAction = {
  type: 'DELETE_CARD',
  payload: number
}

type SetCardAction = {
  type: 'SET_CARD',
  payload: number
}

type ToggleUmaPageAction = {
  type: 'TOGGLE_UMA_PAGE'
}

type ToggleCardPageAction = {
  type: 'TOGGLE_CARD_PAGE'
}

type ResetFavoriteAction = {
  type: 'RESET_FAVORITE',
}

const resetState = (): State => {
  return {
    favoriteCardUuids: [],
    cardUuid: 0,
    umaUuid: 0,
    showUmaPage: true,
    showCardPage: true,
  }
}

type Action = AppendAction 
              | DeleteAction 
              | ResetFavoriteAction 
              | SetUmaAction 
              | SetCardAction
              | ToggleUmaPageAction
              | ToggleCardPageAction

type State = {
  favoriteCardUuids: number[],
  umaUuid: number,
  cardUuid: number,
  showUmaPage: boolean,
  showCardPage: boolean
}

const selectedCardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_UMA_ACTION':
      return {
        ...state,
        umaUuid: action.payload,
        showUmaPage:!state.showUmaPage
      }
    case 'APPEND_CARD':
      if(state.favoriteCardUuids.length >= 6) return state;
      if(state.favoriteCardUuids.includes(action.payload)) return state;
      return {
        ...state,
        favoriteCardUuids: [...state.favoriteCardUuids, action.payload],
      }
    case 'DELETE_CARD':
      return {
        ...state,
        favoriteCardUuids: state.favoriteCardUuids.filter(x => x !== action.payload),
      };
    case 'SET_CARD':
      return {
        ...state,
        cardUuid: action.payload,
        showCardPage:false
      }
    case 'RESET_FAVORITE':
      return {
        ...state,
        favoriteCardUuids: []
      }
    case 'TOGGLE_UMA_PAGE':
      return {
        ...state,
        showUmaPage: !state.showUmaPage
      }
    case 'TOGGLE_CARD_PAGE':
      return {
        ...state,
        showCardPage: !state.showCardPage
      }
    default:
      throw new Error('Unhandled action');
  }
}

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(selectedCardReducer, {}, resetState);

  const addFavoriteCard = (uuid: number) => { Mixpanel.track(TRACK.SET_FAVORITE, {uuid: uuid}); dispatch({ type: 'APPEND_CARD', payload: uuid })}
  const deleteCard = (uuid: number) => dispatch({ type: 'DELETE_CARD', payload: uuid })
  const resetCard = () => dispatch({ type: 'RESET_FAVORITE' })
  const setUmamusume = (uuid: number) => { Mixpanel.track(TRACK.SET_UMA, {uuid: uuid}); dispatch({ type: 'SET_UMA_ACTION', payload: uuid })} 
  const setCard = (uuid: number) => { Mixpanel.track(TRACK.SET_CARD, {uuid: uuid}); dispatch({ type: 'SET_CARD', payload: uuid })}
  const toggleUmaPage = () => dispatch({ type: 'TOGGLE_UMA_PAGE' });
  const toggleCardPage = () => dispatch({ type: 'TOGGLE_CARD_PAGE' });

  useEffect(() => {
    Mixpanel.track(TRACK.MAINPAGE, {})
  }, [])

  return (
    <div className={"MainPage"}>
      <div className={`UmaListSection ${state.showUmaPage ? "activated" : ""}`}>
        <UmaListContainer
          onClickItem={setUmamusume}
          showUmaPage={state.showUmaPage}
        />
      </div>

      <div className={"UmaEventArea"}>
        <div className={"UmaEventChoice EventChoice"}>
          <UmaDetailContainer
          uuid={state.umaUuid} 
          toggleUmaPage={toggleUmaPage}
          />
        </div>

        <div className={"CardEventChoice EventChoice"}>
          <SupportCardDetailContainer
           uuid={state.cardUuid}
           toggleCardPage={toggleCardPage} />
        </div>
      </div>
      <div className={`CardListArea ${state.showCardPage?"activated":""}`}>
        <CardListView
          selectedList={state.favoriteCardUuids}
          onClickItem={setCard}
          onDeleteItem={deleteCard}
          onDoubleClickItem={addFavoriteCard}
          onResetItem={resetCard}
          showCardPage={state.showCardPage}
        />
      </div>
    </div>
  )
}

export default Main;
