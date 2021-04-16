import { Uma } from '../../types';
import UmaComponent from './UmaComponent';
import './UmaList.scss';

type Props = {
  umas: Uma[];
  clickItem: (uuid: number) => void;
};

const UmaList: React.FC<Props> = (props: Props) => {
  const { umas } = props;
  return (
    <div className={'UmaList'}>
      <p className={'MainPagelabel'}>우마무스메 리스트</p>
      <div></div>
      {/* 여기에 별 갯수 컴포넌트 입력 */}
      <div className={'UmaComponentList'}>
        <div className={'UmaGrid'}>
          {umas.map((x, i) => (
            <UmaComponent uma={x} clickItem={props.clickItem} key={x.umaName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UmaList;
