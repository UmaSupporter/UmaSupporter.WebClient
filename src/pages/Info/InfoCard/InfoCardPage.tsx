import WIPComponent from '../../../components/WIP/WIPComponent';

import './InfoCardPage.scss';

const InfoCard = () => {
  // const location = useLocation().pathname;
  // const isSelected = location.includes('selected');
  // const history = useHistory();

  return (
    <div className={'InfoCardPage'}>
      <WIPComponent />
      {/* <div>여기에 카드 리스트 컴포넌트 입력</div>
      {isSelected && <div>여기에 컴포넌트 입력</div>} */}
    </div>
  );
};

export default InfoCard;
