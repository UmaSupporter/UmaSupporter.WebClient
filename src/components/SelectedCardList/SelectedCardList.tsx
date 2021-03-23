import SelectedCardContainer from "./SelectedCard/SelectedCardContainer"

type Props = {
  uuids: number[]
  onDeleteItem: (uuid: number) => void,
  onResetItem: () => void
}

const SelectedCardList: React.FC<Props> = (props: Props) => {
  return <>
  {
    props.uuids.map(x => <SelectedCardContainer onDeleteItem={props.onDeleteItem} uuid={x} />)
  }
  <button onClick={() => props.onResetItem()}>reset</button>
  </>
}

export default SelectedCardList
