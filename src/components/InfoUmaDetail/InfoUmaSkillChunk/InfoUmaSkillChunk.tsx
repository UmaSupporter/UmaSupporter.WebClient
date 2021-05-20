import { InfoUmaSkillDetail } from '../InfoUmaSkillDetail';
import './InfoUmaSkillChunk.scss';

type Props = {
  category: string;
  skills: any[];
};

type SkillCategoryType = 'ORIGIN' | 'BASIC' | 'AWAKENING';

const SKILL_CATEGORY_NAME: Record<SkillCategoryType, string> = {
  ORIGIN: '고유',
  BASIC: '초기',
  AWAKENING: '각성',
};

const InfoUmaSkillChunk = (props: Props) => {
  const { category, skills } = props;
  return (
    <div className="InfoUmaSkillChunkBase">
      <div className="InfoUmaSkillCategoryName">
        {SKILL_CATEGORY_NAME[category as SkillCategoryType]}
      </div>
      {skills.map((skill) => (
        <InfoUmaSkillDetail skill={skill} />
      ))}
    </div>
  );
};

export default InfoUmaSkillChunk;
