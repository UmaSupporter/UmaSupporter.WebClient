
type Props = {
  uuid: number,
  cardName: string,
  secondName: string,
  cardType: string,
  onDeleteItem: (uuid: number) => void
}


const SelectedCard: React.FC<Props> = (props: Props) => {

  return <>
    <p>{props.cardName} / {props.cardType} / {props.secondName}</p>
    <button onClick={() => props.onDeleteItem(props.uuid)}>remove card</button>
  </>
}

export default SelectedCard
