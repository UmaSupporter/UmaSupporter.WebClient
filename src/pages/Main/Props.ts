export type SetUmaAction = {
  type: 'SET_UMA_ACTION';
  payload: number;
};

export type AppendAction = {
  type: 'APPEND_CARD';
  payload: number;
};

export type DeleteAction = {
  type: 'DELETE_CARD';
  payload: number;
};

export type SetCardAction = {
  type: 'SET_CARD';
  payload: number;
};

export type ToggleUmaPageAction = {
  type: 'TOGGLE_UMA_PAGE';
};

export type ToggleCardPageAction = {
  type: 'TOGGLE_CARD_PAGE';
};

export type ResetFavoriteAction = {
  type: 'RESET_FAVORITE';
};

export type ToggleGeneralChoice = {
  type: 'TOGGLE_GENERAL_CHOICE';
};

export const resetState = (): MainState => {
  const favoritesString = localStorage.getItem('favoriteCardUuids');
  return {
    favoriteCardUuids: favoritesString ? JSON.parse(favoritesString) : [],
    cardUuid: 0,
    umaUuid: 0,
    showUmaPage: true,
    showCardPage: true,
    showGeneralChoice: false,
  };
};

export type MainAction =
  | AppendAction
  | DeleteAction
  | ResetFavoriteAction
  | SetUmaAction
  | SetCardAction
  | ToggleUmaPageAction
  | ToggleCardPageAction
  | ToggleGeneralChoice;

export type MainState = {
  favoriteCardUuids: number[];
  umaUuid: number;
  cardUuid: number;
  showUmaPage: boolean;
  showCardPage: boolean;
  showGeneralChoice: boolean;
};

export const selectedCardReducer = (
  state: MainState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case 'SET_UMA_ACTION':
      return {
        ...state,
        umaUuid: action.payload,
        showUmaPage: !state.showUmaPage,
      };
    case 'APPEND_CARD': {
      if (state.favoriteCardUuids.includes(action.payload)) {
        const newFavorites = state.favoriteCardUuids.filter(
          (uuid: number) => uuid !== action.payload
        );
        localStorage.setItem('favoriteCardUuids', JSON.stringify(newFavorites));
        return {
          ...state,
          favoriteCardUuids: newFavorites,
        };
      }
      if (state.favoriteCardUuids.length >= 6) {
        return state;
      }
      const newFavorites = [...state.favoriteCardUuids, action.payload];
      localStorage.setItem('favoriteCardUuids', JSON.stringify(newFavorites));
      return {
        ...state,
        favoriteCardUuids: newFavorites,
      };
    }
    case 'DELETE_CARD': {
      const newFavorites = state.favoriteCardUuids.filter(
        (x: number) => x !== action.payload
      );
      localStorage.setItem('favoriteCardUuids', JSON.stringify(newFavorites));
      return {
        ...state,
        favoriteCardUuids: newFavorites,
      };
    }
    case 'SET_CARD':
      return {
        ...state,
        cardUuid: action.payload,
        showCardPage: false,
      };
    case 'RESET_FAVORITE':
      localStorage.setItem('favoriteCardUuids', JSON.stringify([]));
      return {
        ...state,
        favoriteCardUuids: [],
      };
    case 'TOGGLE_UMA_PAGE':
      return {
        ...state,
        showUmaPage: !state.showUmaPage,
      };
    case 'TOGGLE_CARD_PAGE':
      return {
        ...state,
        showCardPage: !state.showCardPage,
      };
    case 'TOGGLE_GENERAL_CHOICE':
      return {
        ...state,
        showGeneralChoice: !state.showGeneralChoice,
      };
    default:
      throw new Error('Unhandled action');
  }
};
