import regexifyString from 'regexify-string';
import Skill from './Skill';

type Props = {
  effect: string;
};

const Effect: React.FC<Props> = (props: Props) => {
  const { effect } = props;

  const skill = regexifyString({
    pattern: /(『.*?』)/gi,
    decorator: (match, index) => {
      return <Skill key={index} skill={match} />;
    },
    input: effect,
  });

  return <>{skill}</>;
};

export default Effect;
