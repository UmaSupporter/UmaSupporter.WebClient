import React, { useContext } from 'react';
import { GetUmaDetailInfoQuery } from '../../generated/graphql';
import { UriContext } from '../../common';
import './InfoUmaDetail.scss';
import { StarRate } from '../common/StarRate';
import { InfoUmaSkillDetail } from './InfoUmaSkillDetail';

type Props = {
  umaInfoData: GetUmaDetailInfoQuery;
};

const InfoUmaDetail = (props: Props) => {
  const { umaInfoData } = props;
  const { umamusumeId } = umaInfoData;
  const uri = useContext(UriContext);

  const imagePath = `${uri}/images/${umamusumeId!.umaImage!}`;

  return (
    <div className={'InfoUmaDetail'}>
      <div className={'InfoUmaDetailTitle'}>
        <img
          src={imagePath}
          alt={'umamusume'}
          className={'InfoUmaDetailIcon'}
        />
        <div className={'InfoUmaDetailRightArea'}>
          <div className={'InfoUmaDetailNameArea'}>
            <div className={'InfoUmaDetailName'}>{umamusumeId!.umaName}</div>
            <div className={'InfoUmaDetailSecond'}>
              {umamusumeId!.secondName}
            </div>
          </div>
          <StarRate star={Number(umamusumeId!.rareDegree!)} />
        </div>
      </div>
      <div className={'InfoUmaSkillList'}>
        {umamusumeId!.skills &&
          umamusumeId!.skills.map((skill) => {
            return <InfoUmaSkillDetail skill={skill} />;
            // <div style={{ marginBottom: '8px' }}>
            //   <div>{skill?.category}</div>
            //   <div>
            //     <div>{skill?.skill?.buffType?.name}</div>
            //     <div>{skill?.skill?.distanceType?.name}</div>
            //     <div>{skill?.skill?.grade?.name}</div>
            //     <div>{skill?.skill?.name}</div>
            //     <div>{skill?.skill?.operationType?.name}</div>
            //     <img src={iconPath} />
            //   </div>
            // </div>
          })}
      </div>
    </div>
  );
};

export default InfoUmaDetail;
