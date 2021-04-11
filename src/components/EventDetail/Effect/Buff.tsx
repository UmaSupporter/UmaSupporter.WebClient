import ReactTooltip from 'react-tooltip';
import './Buff.scss';

type Props = {
  buff: string;
  name: string;
  nameKr: string;
  effectKr: string;
  isDebuff: boolean;
};

const Buff: React.FC<Props> = (props: Props) => {
  const { buff, name, nameKr, effectKr, isDebuff } = props;

  return (
    <>
      <slot
        className={isDebuff ? 'Debuff' : 'Buff'}
        data-tip
        data-for={`skill/${name}`}
      >
        {buff}({nameKr})
      </slot>
      <ReactTooltip id={`skill/${name}`} aria-haspopup="true" role="example">
        <li>{effectKr}</li>
      </ReactTooltip>
    </>
  );
};

export default Buff;
