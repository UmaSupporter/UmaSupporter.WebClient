import SelectedCardContainer from './SelectedCard/SelectedCardContainer';
import './SelectedCardList.scss';

type Props = {
  uuids: number[];
  onDeleteItem: (uuid: number) => void;
  onClickItem: (uuid: number) => void;
};

const SelectedCardList: React.FC<Props> = (props: Props) => {
  const { uuids, onDeleteItem, onClickItem } = props;
  return (
    <div className={'SelectedCardList'}>
      <div className={'SelectedCardWrapper'}>
        <div className={'SelectedCards'}>
          {uuids.map((x, i) => (
            <SelectedCardContainer
              key={i}
              onDeleteItem={onDeleteItem}
              onClickItem={onClickItem}
              uuid={x}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedCardList;
