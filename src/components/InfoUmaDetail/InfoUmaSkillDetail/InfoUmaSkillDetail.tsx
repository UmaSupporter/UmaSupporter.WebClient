import React, { useContext } from 'react';
import { UriContext } from '../../../common';
import './InfoUmaSkillDetail.scss';

type Props = {
  skill: any;
};

const InfoUmaSkillDetail = (props: Props) => {
  const { skill } = props.skill!;
  const uri = useContext(UriContext);

  const iconPath = `${uri}/images/${skill.icon}`;
  const iconAlt = `${skill.name}`;
  return (
    <div className={'InfoUmaSkillDetail'}>
      <img className={'InfoUmaSkillDetailIcon'} src={iconPath} alt={iconAlt} />
      <div className={'InfoUmaSkillLabels'}>
        <div className={'InfoUmaSkillName'}>{skill?.name}</div>
        <div>{skill?.grade?.name}</div>
        <div>{skill?.distanceType?.name}</div>
        <div>{skill?.buffType?.name}</div>
      </div>
    </div>
  );
};

export default InfoUmaSkillDetail;
