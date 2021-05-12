import React, { useContext } from 'react';
import { UriContext } from '../../../common';
import './InfoUmaSkillDetail.scss';

type Props = {
  skill: any;
};

const InfoUmaSkillDetail = (props: Props) => {
  const { category, skill } = props.skill!;
  const uri = useContext(UriContext);

  const iconPath = `${uri}/images/${skill.icon}`;
  const iconAlt = `${skill.name}`;
  return (
    <div className={'InfoUmaSkillDetail'}>
      <img className={'InfoUmaSkillDetailIcon'} src={iconPath} alt={iconAlt} />
      <div className={'InfoUmaSkillLabels'}>
        <div>{skill?.category}</div>
        <div className={'InfoUmaSkillName'}>{skill?.name}</div>
      </div>
    </div>
  );
};

export default InfoUmaSkillDetail;
