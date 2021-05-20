import React, { useContext } from 'react';
import {
  GetUmaDetailInfoQuery,
  UmaSkillCategoryEnum,
} from '../../generated/graphql';
import { UriContext } from '../../common';
import './InfoUmaDetail.scss';
import { StarRate } from '../common/StarRate';
import { InfoUmaSkillChunk } from './InfoUmaSkillChunk';
import { Link } from 'react-router-dom';

type Props = {
  umaInfoData: GetUmaDetailInfoQuery;
};

const InfoUmaDetail = (props: Props) => {
  const { umaInfoData } = props;
  const { umamusumeId } = umaInfoData;
  const uri = useContext(UriContext);

  const imagePath = `${uri}/images/${umamusumeId!.umaImage!}`;

  return (
    <div className={'InfoUmaDetailBase'}>
      <Link to={'/info'} className={'InfoUmaDetailTitle'}>
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
      </Link>
      <div className={'InfoUmaSkillList'}>
        {umamusumeId!.skills &&
          Object.entries(
            umamusumeId!.skills.reduce(
              (s: Record<UmaSkillCategoryEnum, Array<any>[]>, c: any) => {
                const category: UmaSkillCategoryEnum = c!.category;
                s[category] = [c, ...s[category]];
                return s;
              },
              { ORIGIN: [], BASIC: [], AWAKENING: [] }
            )
          ).map(([category, skills]) => (
            <InfoUmaSkillChunk category={category} skills={skills} />
          ))}
      </div>
    </div>
  );
};

export default InfoUmaDetail;
