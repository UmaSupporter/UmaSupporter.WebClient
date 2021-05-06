import React from 'react';
import gql from 'graphql-tag';

gql`
query {
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
  return <div>infouma</div>
}

export default InfoUma;