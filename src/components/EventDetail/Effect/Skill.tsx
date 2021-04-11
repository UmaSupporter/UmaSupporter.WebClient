import gql from 'graphql-tag';
import ReactTooltip from 'react-tooltip';
import { useContext, useMemo } from 'react';
import { useGetSkillWithNameQuery } from '../../../generated/graphql';
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
};

const getSkillOnly = (skill: string): string => {
  return skill.replace('『', '').replace('』', '');
};

const Skill: React.FC<Props> = (props: Props) => {
  const { skill } = props;
  const onlySkill = useMemo<string>(() => getSkillOnly(skill), [skill]);
  const uri = useContext(UriContext);
  const { loading, error, data } = useGetSkillWithNameQuery({
    variables: { name: onlySkill },
  });
  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  console.log(data);

  if (data?.skillName?.name == null) return <>{skill}</>;
  return (
    <>
      <img
        src={`${uri}/images/${data.skillName.icon!}`}
        className={'SkillIcon'}
        alt={data.skillName.nameKr!}
      />
      <slot className={'Skill'} data-tip data-for={`skill/${onlySkill}`}>
        {skill}({data.skillName.nameKr!})
      </slot>
      <ReactTooltip
        id={`skill/${onlySkill}`}
        aria-haspopup="true"
        role="example"
      >
        <li>{data.skillName.description}</li>
      </ReactTooltip>
    </>
  );
};

export default Skill;
