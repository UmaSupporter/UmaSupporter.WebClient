import { CARD_TYPE } from "../../types"

type SetFilterAction = {
  type: 'SET_FILTER',
  payload: CARD_TYPE
}

type RemoveFilterAction = {
  type: 'REMOVE_FILTER',
  payload: CARD_TYPE
}

type ToggleFilterAction = {
  type: "TOGGLE_FILTER",
  payload: CARD_TYPE
}

type ResetFilterAction = {
  type: 'RESET_FILTER',
}

type Action = SetFilterAction 
              | RemoveFilterAction 
              | ToggleFilterAction 
              | ResetFilterAction 

type State = {
  filters: Set<CARD_TYPE>,
}

export const filterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        filters: state.filters.add(action.payload)
      };
    case 'REMOVE_FILTER':
      state.filters.delete(action.payload)
      return {
        filters: state.filters
      };
    case 'TOGGLE_FILTER':
      if(state.filters.has(action.payload)) {
        state.filters.delete(action.payload)
        return {
          filters: state.filters
        };
      }
      else {
        return {
          filters: state.filters.add(action.payload)
        };
      }
    case 'RESET_FILTER':
      return {
        filters: new Set<CARD_TYPE>()
      };
    default:
      throw new Error('Unhandled action');
  }
}
