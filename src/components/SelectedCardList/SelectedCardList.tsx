import SelectedCardContainer from "./SelectedCard/SelectedCardContainer"
import './SelectedCardList.scss';

type Props = {
  uuids: number[]
  onDeleteItem: (uuid: number) => void,
  onClickItem: (uuid:number) => void,
  onResetItem: () => void
}

const SelectedCardList: React.FC<Props> = (props: Props) => {
  return <div className="SelectedCardList">
    {props.uuids.map(x =>
        <SelectedCardContainer 
          onDeleteItem={props.onDeleteItem}
          onClickItem={props.onClickItem}
          uuid={x} />
      )}
    <button onClick={() => props.onResetItem()}>reset</button>
  </div>
}

export default SelectedCardList
