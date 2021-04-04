import { Input, Typography } from "@material-ui/core";
import { useReducer } from "react";
import { useHistory } from "react-router-dom"
import SelectedCardListContainer from "../../components/SelectedCardList";
import SupportCardListContainer from "../../components/SupportCardList";
import "./Main.scss";

type AppendAction = {
  type: 'APPEND_CARD',
  payload: number
}

type DeleteAction = {
  type: 'DELETE_CARD',
  payload: number
}

type SetCardType = {
  type: 'SET_CARD_TYPE',
  payload: string
}

type ResetAction = {
  type: 'RESET',
}

const resetState = (): State => {
  return {
    uuids: [],
    cardType: ""
  }
}

type Action = AppendAction | DeleteAction | ResetAction | SetCardType

type State = {
  uuids: number[],
  cardType: string
}

const selectedCardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'APPEND_CARD':
      if(state.uuids.length >= 6) return state;
      if(state.uuids.includes(action.payload)) return state;
      return {
        uuids: [...state.uuids, action.payload],
        cardType: state.cardType
      }
    case 'DELETE_CARD':
      return {
        uuids: state.uuids.filter(x => x !== action.payload),
        cardType: state.cardType
      };
    case 'SET_CARD_TYPE':
      return {
        uuids: state.uuids,
        cardType: action.payload
      }
    case 'RESET':
      return resetState()
    default:
      throw new Error('Unhandled action');
  }
}

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(selectedCardReducer, {uuids: [], cardType: ""}, resetState);

  const history = useHistory();

  const addCard = (uuid: number) => dispatch({ type: 'APPEND_CARD', payload: uuid })
  const deleteCard = (uuid: number) => dispatch({ type: 'DELETE_CARD', payload: uuid })
  const resetCard = () => dispatch({ type: 'RESET' })

  const onChangeCardType = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'SET_CARD_TYPE', payload: event.target.value == null ? "" : event.target.value})
  }

  const onSubmit = (event: unknown) => {
    history.push(`/play?selected=${state.uuids.join(", ")}`)
  }

  return (
    <div className={"MainPage"}>
      <div className={"UmaList"}>

      </div>
      <div className={"CardList"}>
        <div>
          즐겨찾기
        </div>
        <div>
          최근 선택한 카드
        </div>
        <div className={"CardListGrid"}>
          <SupportCardListContainer
          onClickItem={addCard}
          cardType={state.cardType}
          selectedList={state.uuids}
          />
        </div>
      </div>
      <div className={"UmaEventChoice EventChoice"}>

      </div>
        
      <div className={"CardEventChoice EventChoice"}>

      </div>
    </div>
  )
}

export default Main;
