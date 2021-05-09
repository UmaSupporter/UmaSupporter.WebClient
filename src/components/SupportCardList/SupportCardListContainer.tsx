import gql from 'graphql-tag';
import React from 'react';
import { useSupportCardQuery } from '../../generated/graphql';
import { CORE_SUPPORT_CARD_FIELD } from '../common/fragments';
import { CARD_TYPE, SupportCard } from '../../types';
import SupportCardList from './SupportCardList';
import { convertToCardType, rareDegreeCompare } from '../../common/utils';

gql`
  ${CORE_SUPPORT_CARD_FIELD}
  query supportCard {
    supportCard {
      ...CoreSupportCardField
    }
  }
`;

type Props = {
  onClickItem: (uuid: number) => void;
  onFavoriteItem: (uuid: number) => void;
  filters: Set<CARD_TYPE>;
  selectedList: Array<Number>;
};

const SupportCardListContainer: React.FC<Props> = (props: Props) => {
  const { loading, error, data } = useSupportCardQuery();
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  if (data == null || data.supportCard == null) return <p>data not exist</p>;

  const { onClickItem, onFavoriteItem, filters, selectedList } = props;

  let cardList: SupportCard[] = data.supportCard
    .map((x) => {
      return {
        uuid: Number(x?.uuid),
        cardName: x?.cardName,
        secondName: x?.secondName,
        rareDegree: x?.rareDegree,
        cardImage: x?.cardImage,
        cardType: x?.cardType,
      } as SupportCard;
    })
    .sort(rareDegreeCompare)
    .reverse();

  if (filters.size !== 0) {
    cardList = cardList.filter((x) =>
      filters.has(convertToCardType(x.cardType))
    );
  }

  return (
    <>
      <SupportCardList
        cards={cardList}
        selectedList={selectedList}
        onClickItem={onClickItem}
        onFavoriteItem={onFavoriteItem}
      />
    </>
  );
};

export default SupportCardListContainer;
