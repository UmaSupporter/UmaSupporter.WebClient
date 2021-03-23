import { Redirect, RouteComponentProps } from "react-router-dom";
import SupportCardDetailContainer from "../../components/SupportCardDetail";

const Play: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const query = new URLSearchParams(props.location.search).get("selected") 

  const selectedList = query?.split(',').map(x => Number(x))

  if(selectedList == null || selectedList.length > 6) return <Redirect to='/'/>;

  return (
    <>
      {
        selectedList.map(x =>
          <SupportCardDetailContainer uuid={x} />
        )
      }
    </>
  )
}

export default Play;
