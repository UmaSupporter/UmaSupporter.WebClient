import React, { useEffect, useReducer } from "react";
import SupportCardDetailContainer from "../../components/SupportCardDetail";
import UmaListContainer from "../../components/UmaList";
import "./Main.scss";
import UmaDetailContainer from "../../components/UmaDetail";
import { Mixpanel, TRACK } from "../../common/mixpanel";
import CardListView from "../../views/CardList";
import logoImage from "../../img/logo.png";
import donationLogo from "../../img/donation.svg";

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
        showUmaPage: !state.showUmaPage
      }
    case 'APPEND_CARD':
      if (state.favoriteCardUuids.includes(action.payload))
        return {
          ...state,
          favoriteCardUuids: state.favoriteCardUuids.filter(uuid => uuid !== action.payload),
        };
      if (state.favoriteCardUuids.length >= 6) return state;
      else {
        return {
          ...state,
          favoriteCardUuids: [...state.favoriteCardUuids, action.payload],
        }
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
        showCardPage: false
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

  const toggleFavoriteCard = (uuid: number) => { Mixpanel.track(TRACK.SET_FAVORITE, { uuid: uuid }); dispatch({ type: 'APPEND_CARD', payload: uuid }) }
  const deleteCard = (uuid: number) => dispatch({ type: 'DELETE_CARD', payload: uuid })
  const resetCard = () => dispatch({ type: 'RESET_FAVORITE' })
  const setUmamusume = (uuid: number) => { Mixpanel.track(TRACK.SET_UMA, { uuid: uuid }); dispatch({ type: 'SET_UMA_ACTION', payload: uuid }) }
  const setCard = (uuid: number) => { Mixpanel.track(TRACK.SET_CARD, { uuid: uuid }); dispatch({ type: 'SET_CARD', payload: uuid }) }
  const toggleUmaPage = () => dispatch({ type: 'TOGGLE_UMA_PAGE' });
  const toggleCardPage = () => dispatch({ type: 'TOGGLE_CARD_PAGE' });

  useEffect(() => {
    Mixpanel.track(TRACK.MAINPAGE, {})
  }, [])

  return (
    <div className={"MainPage"}>
      <div className={"MainPageTitleBar"}>

        <img src={logoImage} className={"titleLogo"} alt={"우마서포터"} />
        {/* <div>우마서포터</div> */}
        <span className={"TitleBarRightItems"}>
          <a className={"donationLink"} href={"https://ko-fi.com/umasupporter"}>
            <img src={donationLogo} className={"donationLogo"} alt={"제작자 후원하기"} />
          </a>
          <a className={"github"} href={"https://github.com/UmaSupporter/umamusume-client"}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>깃허브에서 보기</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </span>
      </div>
      <div className={"MainPageContent"}>
        <div className={`UmaListSection ${state.showUmaPage ? "activated" : ""}`}>
          <UmaListContainer
            onClickItem={setUmamusume}
            showUmaPage={state.showUmaPage}
          />
        </div>

        <div className={`UmaEventArea _${[state.showUmaPage, state.showCardPage].map(x => Number(!x)).reduce((a, b) => a + b)}`}>
          <div className={`UmaEventChoice EventChoice ${!state.showUmaPage ? "activated" : ""}`}>
            <UmaDetailContainer
              uuid={state.umaUuid}
              toggleUmaPage={toggleUmaPage}
            />
          </div>

          <div className={`CardEventChoice EventChoice ${!state.showCardPage ? "activated" : ""}`}>
            <SupportCardDetailContainer
              uuid={state.cardUuid}
              toggleCardPage={toggleCardPage} />
          </div>
        </div>
        <div className={`CardListArea ${state.showCardPage ? "activated" : ""}`}>
          <CardListView
            selectedList={state.favoriteCardUuids}
            onClickItem={setCard}
            onDeleteItem={deleteCard}
            onDoubleClickItem={toggleFavoriteCard}
            onResetItem={resetCard}
            showCardPage={state.showCardPage}
          />
        </div>
      </div>
      <div >
        {/* reserved */}
      </div>
    </div>
  )
}

export default Main;
