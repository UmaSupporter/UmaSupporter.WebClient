import React from 'react';
import { useParams } from 'react-router-dom';
import InfoUmaDetailContainer from '../../../../components/InfoUmaDetail/InfoUmaDetailContainer';



const InfoUmaDetailPage = () => {
  const { id } = useParams<{ id: string | undefined }>();
  // FIXME: uuid가 number로 치환이 안 될 경우나 undefined 일 경우에 대해 처리해야 함
  return <div className={"InfoUmaDetail"}>
    <InfoUmaDetailContainer uuid={Number(id)} />
  </div>
}

export default InfoUmaDetailPage;
