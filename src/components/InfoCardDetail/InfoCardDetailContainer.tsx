import gql from 'graphql-tag';
import { useGetCardDetailInfoQuery } from '../../generated/graphql';

gql`
  query GetCardDetailInfo($uuid: Int!) {
    supportCardId(uuid: $uuid) {
      uuid
      cardName
      cardNameKr
      secondName
      secondNameKr
      cardImage
      rareDegree
      skills {
        category
        skill {
        description

          name
          grade {
            name
          }
          buffType {
            name
          }
          distanceType {
            name
          }
          operationType {
            name
          }
        }
      }
    }
  }
`;

type Props = {
  uuid: number;
};

const InfoCardDetailContainer: React.FC<Props> = (props: Props) => {
  const { uuid } = props;
  const { loading, error, data } = useGetCardDetailInfoQuery({
    variables: { uuid: uuid },
  });

  return <></>;
};

export default InfoCardDetailContainer;
