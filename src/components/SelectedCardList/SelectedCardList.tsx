import SelectedCardContainer from './SelectedCard/SelectedCardContainer';
import './SelectedCardList.scss';

type Props = {
  uuids: number[];
  onDeleteItem: (uuid: number) => void;
  onClickItem: (uuid: number) => void;
};

const SelectedCardList: React.FC<Props> = (props: Props) => {
  return (
    <div className="SelectedCardList">
      <div className={'SelectedCardWrapper'}>
        <div className="SelectedCards">
          {props.uuids.map((x) => (
            <SelectedCardContainer
              key={x}
              onDeleteItem={props.onDeleteItem}
              onClickItem={props.onClickItem}
              uuid={x}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedCardList;
