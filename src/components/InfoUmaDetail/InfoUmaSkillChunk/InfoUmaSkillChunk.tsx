import React from 'react';
import { UmaSkillCategoryEnum } from '../../../generated/graphql';
import { InfoUmaSkillDetail } from '../InfoUmaSkillDetail';
import './InfoUmaSkillChunk.scss';

type Props = {
  category: string;
  skills: any[];
};

const InfoUmaSkillChunk = (props: Props) => {
  const { category, skills } = props;
  return (
    <div className="InfoUmaSkillChunkBase">
      <div className="InfoUmaSkillCategoryName">{category}</div>
      {skills.map((skill) => (
        <InfoUmaSkillDetail skill={skill} />
      ))}
    </div>
  );
};

export default InfoUmaSkillChunk;
