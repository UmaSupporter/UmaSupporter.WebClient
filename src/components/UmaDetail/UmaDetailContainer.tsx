import gql from "graphql-tag";
import { useGetUmaOnIdWithEventQuery } from "../../generated/graphql";
import { UmaEventChoice, UmaEventWithChoice } from "../../types";
import { UMA_EVENT_FIELD_WITH_CHOICES } from "../common/fragments";
import useSelectedCard from "../common/stores/useSelectedCard";
import UmaDetailComponent from "./UmaDetailComponent";
import UmaDetailNotExistComponent from "./UmaDetailNotExistComponent";

gql`
  ${UMA_EVENT_FIELD_WITH_CHOICES}
  query getUmaOnIdWithEvent($uuid: Int!) {
    umamusumeId(uuid: $uuid) {
        uuid
        umaName
        secondName
        rareDegree
        umaImage
        ...UmaEventWithChoice
    }
  }
`;

const UmaDetailContainer: React.FC = () => {
  const uuid = useSelectedCard(state => state.umaUuid);
  const toggleUmaPage = useSelectedCard(state => state.toggleUmaPage);
  const {loading, error, data} = useGetUmaOnIdWithEventQuery({
    variables: { uuid }
  })
  if(loading) return (<p>loading...</p>)
  if(error) return (<p>error</p>)
  if(data == null || data?.umamusumeId == null) return <UmaDetailNotExistComponent />

  const rawEvents = data!.umamusumeId!.umaEvent?.edges

  if(rawEvents == null) return (<p>data not exist</p>)

  const events = rawEvents.map(x => { return {
     title: x?.node?.title!,
     choices: x?.node?.umaEventChoice?.edges!
      .map(x => { return {
        title: x?.node?.title!,
        effect: x?.node?.effectKr!
      } as UmaEventChoice
    })
  } as UmaEventWithChoice }).filter(x => x.choices.length > 1);

  return <UmaDetailComponent 
    umaName={data.umamusumeId.umaName!}
    umaImage={data.umamusumeId.umaImage!}
    secondName={data.umamusumeId.secondName!}
    rareDegree={String(data.umamusumeId.rareDegree!)}
    event={events}
    toggleUmaPage={toggleUmaPage}
    />
}

export default UmaDetailContainer;
