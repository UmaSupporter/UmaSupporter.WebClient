import gql from 'graphql-tag';
import ReactTooltip from 'react-tooltip';
import { useContext } from 'react';
import { UriContext } from '../../../common';
import './Skill.scss';

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

  return (
    <>
      <img src={`${uri}/images/${icon}`} className={'SkillIcon'} alt={nameKr} />
      <slot className={'Skill'} data-tip data-for={`skill/${name}`}>
        {skill}({nameKr})
      </slot>
      <ReactTooltip id={`skill/${name}`} aria-haspopup="true" role="example">
        <li>{description}</li>
      </ReactTooltip>
    </>
  );
};

export default Skill;
