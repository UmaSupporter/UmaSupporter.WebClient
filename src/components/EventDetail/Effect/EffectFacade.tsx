import gql from 'graphql-tag';
import { useMemo } from 'react';
import { useEffectFacadeQuery } from '../../../generated/graphql';
import Buff from './Buff';
import Skill from './Skill';

gql`
  query effectFacade($name: String!) {
    skillName(name: $name) {
      name
      nameKr
      description
      icon
    }
    buffWithName(name: $name) {
      name
      nameKr
      effectKr
      isDebuff
    }
  }
`;

type Props = {
  target: string;
};

const getTargetOnly = (skill: string): string => {
  return skill.replace('『', '').replace('』', '');
};

const EffectFacade: React.FC<Props> = (props: Props) => {
  const { target } = props;
  const onlyTarget = useMemo<string>(() => getTargetOnly(target), [target]);
  const { loading, error, data } = useEffectFacadeQuery({
    variables: { name: onlyTarget },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  if (data?.buffWithName != null)
    return (
      <>
        <Buff
          buff={target}
          name={data.buffWithName.name!}
          nameKr={data.buffWithName.nameKr!}
          effectKr={data.buffWithName.effectKr!}
          isDebuff={data.buffWithName.isDebuff!}
        />
      </>
    );

  if (data?.skillName != null)
    return (
      <>
        <Skill
          skill={target}
          name={data.skillName.name!}
          nameKr={data.skillName.nameKr!}
          description={data.skillName.description!}
          icon={data.skillName.icon!}
        />
      </>
    );

  return <>{target}</>;
};

export default EffectFacade;
