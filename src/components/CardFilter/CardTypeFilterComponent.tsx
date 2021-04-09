import { useContext } from 'react';
import { UriContext } from '../../common';
import { getCardTypeImageName } from '../../common/utils';
import { CARD_TYPE } from '../../types';
import './CardTypeFilterComponent.scss';

type CardTypeSelectedPair = {
  cardType: CARD_TYPE;
  isSelected: boolean;
};

type Props = {
  cardTypes: CardTypeSelectedPair[];
  onClickType: (type: CARD_TYPE) => void;
};

const CardTypeFilterComponent: React.FC<Props> = (props: Props) => {
  const uri = useContext(UriContext);
  const { cardTypes, onClickType } = props;
  return (
    <div className={`CardTypeFilterList`}>
      {cardTypes.map((x, i) => (
        <img
          key={i}
          className={`CardTypeFilterIcon ${x.isSelected ? 'selected' : ''}`}
          onClick={() => onClickType(x.cardType)}
          alt={x.cardType}
          src={`${uri}/images/${getCardTypeImageName(x.cardType)}`}
        />
      ))}
    </div>
  );
};

export default CardTypeFilterComponent;
