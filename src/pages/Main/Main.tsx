import React, { useEffect, useReducer } from 'react';
import SupportCardDetailContainer from '../../components/SupportCardDetail';
import UmaListContainer from '../../components/UmaList';
import './Main.scss';
import UmaDetailContainer from '../../components/UmaDetail';
import { Mixpanel, TRACK } from '../../common/mixpanel';
import CardListView from '../../views/CardList';

import GlobalChoiceDialog from '../../components/GeneralChoiceDialog';
import { selectedCardReducer, resetState } from './Props';
import { useLocation } from 'react-router-dom';

const Main: React.FC = () => {
  const [state, dispatch] = useReducer(selectedCardReducer, {}, resetState);
  const location = useLocation()
  const params = new URLSearchParams(location.search);
  const uma = Number(params.get('uma'));
  const card = Number(params.get('card'));

  const toggleFavoriteCard = (uuid: number) => {
    Mixpanel.track(TRACK.SET_FAVORITE, { uuid: uuid });
    dispatch({ type: 'APPEND_CARD', payload: uuid });
  };
  const deleteCard = (uuid: number) =>
    dispatch({ type: 'DELETE_CARD', payload: uuid });
  const resetCard = () => dispatch({ type: 'RESET_FAVORITE' });
  const setUmamusume = (uuid: number) => {
    Mixpanel.track(TRACK.SET_UMA, { uuid: uuid });
    dispatch({ type: 'SET_UMA_ACTION', payload: uuid });
  };
  const setCard = (uuid: number) => {
    Mixpanel.track(TRACK.SET_CARD, { uuid: uuid });
    dispatch({ type: 'SET_CARD', payload: uuid });
  };
  const toggleUmaPage = () => dispatch({ type: 'TOGGLE_UMA_PAGE' });
  const toggleCardPage = () => dispatch({ type: 'TOGGLE_CARD_PAGE' });
  const toggleGeneralChoice = () => dispatch({ type: 'TOGGLE_GENERAL_CHOICE' });

  useEffect(() => {
    Mixpanel.track(TRACK.MAINPAGE, {});
  }, [])

  useEffect(() => {
    if (uma !== 0) {
      Mixpanel.track(TRACK.SET_UMA, { uuid: uma });
      dispatch({ type: 'SET_UMA_ACTION', payload: uma });
    }
    if (card !== 0) {
      Mixpanel.track(TRACK.SET_CARD, { uuid: card });
      dispatch({ type: 'SET_CARD', payload: card });
    }
  }, [card, uma]);

  return (
    <div className={"MainPage"}>
      <div className={'MainPageContent'}>
        <div
          className={`UmaListSection ${state.showUmaPage ? 'activated' : ''}`}
        >
          <UmaListContainer
            onClickItem={setUmamusume}
            showUmaPage={state.showUmaPage}
          />
        </div>

        <div
          className={`UmaEventArea _${[state.showUmaPage, state.showCardPage]
            .map((x) => Number(!x))
            .reduce((a, b) => a + b)}`}
        >
          <div
            className={`UmaEventChoice EventChoice ${!state.showUmaPage ? 'activated' : ''
              }`}
          >
            <UmaDetailContainer
              uuid={state.umaUuid}
              toggleUmaPage={toggleUmaPage}
            />
          </div>

          <div
            className={`CardEventChoice EventChoice ${!state.showCardPage ? 'activated' : ''
              }`}
          >
            <SupportCardDetailContainer
              uuid={state.cardUuid}
              toggleCardPage={toggleCardPage}
            />
          </div>
        </div>
        <div
          className={`CardListArea ${state.showCardPage ? 'activated' : ''}`}
        >
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
      <div className={'GlobalChoice'}>
        <div className={'GlobalChoiceButton'} onClick={toggleGeneralChoice}>
          📢 우마무스메 / 서포터 외의 이벤트
        </div>
        <GlobalChoiceDialog
          open={state.showGeneralChoice}
          onClose={toggleGeneralChoice}
        />
      </div>

    </div>
  );
};

export default Main;
