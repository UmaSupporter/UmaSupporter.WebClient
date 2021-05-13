import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    <div className={'InfoUmaSkillDetailBase'}>
      <Link to={'/info/'}>
        <div className={'InfoUmaSkillDetailContents'}>
          <img className={'InfoUmaSkillDetailIcon'} src={iconPath} alt={iconAlt} />
          <div className={'InfoUmaSkillLabels'}>
            <div className={'InfoUmaSkillTitle'}>
              <span className={`InfoUmaSkillGrade ${skill?.grade?.name}`}>{skill?.grade?.name}</span>
              <span className={'InfoUmaSkillName'}>{skill?.nameKr}</span>
            </div>
            <div className={'InfoUmaSkillDescription'}>{skill?.description}</div>
          </div>
        </div>
      </Link>
    </div >
  );
};

export default InfoUmaSkillDetail;
