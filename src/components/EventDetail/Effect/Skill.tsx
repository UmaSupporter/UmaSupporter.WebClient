import gql from "graphql-tag";
import { useMemo } from "react";
import { useGetSkillWithNameQuery } from "../../../generated/graphql";

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
  skill: string
}

const getSkillOnly = (skill: string): string => {
  return skill.replace('『', '').replace('』', '');
}

const Skill: React.FC<Props> = (props: Props) => {
  const { skill } = props;
  const onlySkill = useMemo<string>(() => getSkillOnly(skill), [skill])
  const {loading, error, data} = useGetSkillWithNameQuery({variables: {name: onlySkill}})
  if(loading) return <div>loading...</div>
  if(error) return <div>error</div>
  console.log(data)

  if(data?.skillName?.name == null) return <>{skill}</>
  return <>{skill}({data.skillName.nameKr!})</>
}

export default Skill
