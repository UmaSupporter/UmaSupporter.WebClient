import { Input } from "@material-ui/core";
import { useReducer } from "react";
import { Link } from "react-router-dom"
import SelectedCardListContainer from "../../components/SelectedCardList";
import SupportCardListContainer from "../../components/SupportCardList";

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
  const addCard = (uuid: number) => dispatch({ type: 'APPEND_CARD', payload: uuid })
  const deleteCard = (uuid: number) => dispatch({ type: 'DELETE_CARD', payload: uuid })
  const resetCard = () => dispatch({ type: 'RESET' })

  const onChangeCardType = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'SET_CARD_TYPE', payload: event.target.value == null ? "" : event.target.value})
  }

  return (
    <>
      <Input onChange={onChangeCardType}/>
      <SupportCardListContainer cardType={state.cardType} onClickItem={addCard} />
      <SelectedCardListContainer
        selectedList={state.uuids}
        onDeleteItem={deleteCard}
        onResetItem={resetCard} />
      <Link to={`play?selected=${state.uuids.join(',')}`}>
        <button type="button">
          start!
        </button>
      </Link>
    </>
  )
}

export default Main;
