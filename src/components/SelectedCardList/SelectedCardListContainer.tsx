import React from "react";
import useSelectedCard from "../common/stores/useSelectedCard";
import SelectedCardList from "./SelectedCardList";
import shallow from "zustand/shallow";

const SelectedCardListContainer: React.FC = () => {
  const [selectedList, onDeleteItem, onClickItem] = 
    useSelectedCard(state => [state.favoriteCardUuids, state.deleteFavoriteCard, state.toggleFavoriteCard], shallow)

  return <>
    <SelectedCardList
      uuids={selectedList}
      onDeleteItem={onDeleteItem}
      onClickItem={onClickItem}
    />
  </>
};

export default SelectedCardListContainer;
