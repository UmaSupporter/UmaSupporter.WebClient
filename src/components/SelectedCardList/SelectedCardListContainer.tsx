import React from "react";
import SelectedCardList from "./SelectedCardList";


type Props = {
  selectedList: number[],
  onDeleteItem: (uuid: number) => void
  onResetItem: () => void
}

const SelectedCardListContainer: React.FC<Props> = (props: Props) => {
  return <>
    <SelectedCardList
      uuids={props.selectedList}
      onDeleteItem={props.onDeleteItem}
      onResetItem={props.onResetItem} />
  </>
};

export default SelectedCardListContainer;
