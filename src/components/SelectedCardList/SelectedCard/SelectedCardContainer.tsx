import gql from 'graphql-tag';
import { useGetSupportCardOnIdQuery } from '../../../generated/graphql';
import { CORE_SUPPORT_CARD_FIELD } from '../../common/fragments';
import SelectedCard from './SelectedCard';
import SelectedCardPlaceholder from './SelectedCardPlaceholder';

gql`
  ${CORE_SUPPORT_CARD_FIELD}
  query getSupportCardOnId($uuid: Int!) {
    supportCardId(uuid: $uuid) {
      ...CoreSupportCardField
      cardType
    }
  }
`;

type Props = {
  uuid: number;
  onDeleteItem: (uuid: number) => void;
  onClickItem: (uuid: number) => void;
};

const SelectedCardContainer: React.FC<Props> = (props: Props) => {
  const { loading, error, data } = useGetSupportCardOnIdQuery({
    variables: {
      uuid: props.uuid,
    },
  });

  if (loading) return <SelectedCardPlaceholder />;
  if (error) return <p>error</p>;
  if (data == null || data.supportCardId == null) return <p>data not exist</p>;

  const { supportCardId } = data;
  const { onDeleteItem, onClickItem } = props;

  return (
    <SelectedCard
      uuid={Number(supportCardId.uuid!)}
      cardName={supportCardId.cardName!}
      cardType={supportCardId.cardType!}
      secondName={supportCardId.secondName!}
      cardImage={supportCardId.cardImage!}
      rareDegree={supportCardId.rareDegree!}
      onDeleteItem={onDeleteItem}
      onClickItem={onClickItem}
    />
  );
};

export default SelectedCardContainer;
