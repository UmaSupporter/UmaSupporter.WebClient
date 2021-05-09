import React, { useContext } from 'react';
import { GetUmaDetailInfoQuery } from '../../generated/graphql';
import { UriContext } from '../../common';
import './InfoUmaDetail.scss';
import { StarRate } from '../common/StarRate';

type Props = {
  umaInfoData: GetUmaDetailInfoQuery;
};

const InfoUmaDetail = (props: Props) => {
  const uri = useContext(UriContext);

  return (
    <div className={'InfoUmaDetail'}>
      <div className={'InfoUmaDetailTitle'}>
        <img
          src={`${uri}/images/${props.umaInfoData.umamusumeId!.umaImage!}`}
          alt={'umamusume'}
          className={'InfoUmaDetailIcon'}
        />
        <div className={'InfoUmaDetailRightArea'}>
          <div className={'InfoUmaDetailNameArea'}>
            <div className={'InfoUmaDetailName'}>
              {props.umaInfoData.umamusumeId!.umaName}
            </div>
            <div className={'InfoUmaDetailSecond'}>
              {props.umaInfoData.umamusumeId!.secondName}
            </div>
          </div>
          <StarRate star={Number(props.umaInfoData.umamusumeId!.rareDegree!)} />
        </div>
      </div>
      <div className={'InfoUmaSkillList'}>
        {props.umaInfoData.umamusumeId!.skills &&
          props.umaInfoData.umamusumeId!.skills.map(
            (skill) => <div style={{ marginBottom: '8px' }}>
              <div>{skill?.category}</div>
              <div>
                <div>{skill?.skill?.buffType?.name}</div>
                <div>{skill?.skill?.distanceType?.name}</div>
                <div>{skill?.skill?.grade?.name}</div>
                <div>{skill?.skill?.name}</div>
                <div>{skill?.skill?.operationType?.name}</div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default InfoUmaDetail;
