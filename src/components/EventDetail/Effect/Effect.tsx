import regexifyString from 'regexify-string';
import EffectFacade from './EffectFacade';

type Props = {
  effect: string;
};

const Effect: React.FC<Props> = (props: Props) => {
  const { effect } = props;

  return (
    <>
      {regexifyString({
        pattern: /(『.*?』)/gi,
        decorator: (match, index) => {
          return <EffectFacade key={index} target={match} />;
        },
        input: effect,
      })}
    </>
  );
};

export default Effect;
