import gql from 'graphql-tag';
import React from 'react';
import { InfoUmaDetail } from '.';
import { useGetUmaDetailInfoQuery } from '../../generated/graphql';

gql`
  query GetUmaDetailInfo($uuid: Int!) {
    umamusumeId(uuid: $uuid) {
      uuid
      umaName
      umaNameKr
      secondName
      secondNameKr
      umaImage
      rareDegree
      skills {
        category
        skill {
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
          icon
        }
      }
    }
  }
`;

type Props = {
  uuid: number;
};

const InfoUmaDetailContainer = (props: Props) => {
  const { uuid } = props;
  const { loading, error, data } = useGetUmaDetailInfoQuery({
    variables: { uuid: uuid },
  });
  if (loading) return <div></div>;
  if (error) return <div></div>;
  return <InfoUmaDetail umaInfoData={data!}></InfoUmaDetail>;
};

export default InfoUmaDetailContainer;
