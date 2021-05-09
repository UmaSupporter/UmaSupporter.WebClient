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
      {cardTypes.map((x, i) => {
        const { isSelected, cardType } = x;
        const className = `CardTypeFilterIcon ${isSelected ? 'selected' : ''}`;
        const imagePath = `${uri}/images/${getCardTypeImageName(cardType)}`;

        return (
          <img
            key={i}
            className={className}
            onClick={() => onClickType(cardType)}
            alt={cardType}
            src={imagePath}
          />
        );
      })}
    </div>
  );
};

export default CardTypeFilterComponent;
