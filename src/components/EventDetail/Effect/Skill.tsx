import gql from 'graphql-tag';
import { useContext } from 'react';
import { UriContext } from '../../../common';
import './Skill.scss';
import UmaToolTip from './Tooltip';

gql`
  query getSkillWithName($name: String!) {
    skillName(name: $name) {
      name
      nameKr
      description
      icon
    }
  }
`;

type Props = {
  skill: string;
  name: string;
  nameKr: string;
  description: string;
  icon: string;
};

const Skill: React.FC<Props> = (props: Props) => {
  const { skill, name, nameKr, description, icon } = props;
  const uri = useContext(UriContext);
  const iconPath = `${uri}/images/${icon}`;
  const skillInfoLink = `skill/${name}`;

  return (
    <>
      <UmaToolTip title={description} key={skillInfoLink}>
        <div className={'Skill'} >
          <img src={iconPath} className={'SkillIcon'} alt={nameKr} />
          <div className={'SkillName'} >
            {skill}({nameKr})
          </div>
        </div>
      </UmaToolTip>
    </>
  );
};

export default Skill;
