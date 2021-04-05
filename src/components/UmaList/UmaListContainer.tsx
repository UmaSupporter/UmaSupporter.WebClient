import gql from "graphql-tag";
import { useUmaListQuery } from "../../generated/graphql";
import { Uma } from "../../types";
import UmaList from "./UmaList";

gql`
  query umaList {
    umamusume {
      uuid
      umaName
      secondName
      rareDegree
      umaImage
    }
  }
`;

type Props ={
  onClickItem:(uuid:number)=>void,
  showUmaPage:boolean
}

const UmaListContainer: React.FC<Props> = (props: Props) => {
  const {loading, error, data} = useUmaListQuery();
  if (loading) return (<p>loading...</p>)
  if (error) return (<p>error</p>)
  if (data == null || data.umamusume == null) return (<p>data not exist</p>)

  const umamusumeList = data.umamusume.map(x => { return {
    uuid: Number(x!.uuid!),
    umaName: x!.umaName!,
    secondName: x!.secondName!,
    rareDegree: x!.rareDegree!,
    umaImage: x!.umaImage!
  } as Uma})

  return <UmaList 
    umas={umamusumeList}
    clickItem={props.onClickItem}
  />;
};

export default UmaListContainer;
