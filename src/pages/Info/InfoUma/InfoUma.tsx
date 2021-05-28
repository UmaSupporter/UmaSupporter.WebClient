import React from 'react';
import gql from 'graphql-tag';
import { useGetUmaInfoQuery } from '../../../generated/graphql';

gql`
query getUmaInfo{
  umamusume {
    uuid
    umaName
    umaNameKr
    secondName
    secondNameKr
    umaImage
    gamewithWikiId
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
      }
    }
  }
}
`;

const InfoUma = () => {
  const umaInfoList = useGetUmaInfoQuery()
  console.log(umaInfoList)
  return <div>asd</div>
}

export default InfoUma;