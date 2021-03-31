import gql from "graphql-tag";
import { useGetSupportCardOnIdWithEventQuery } from "../../generated/graphql";
import { CardEventChoice, CardEventWithChoice } from "../../types";
import { CARD_EVENT_FIELD_WITH_CHOICES } from "../common/fragments";
import SupportCardDetail from "./SupportCardDetail";

gql`
  ${CARD_EVENT_FIELD_WITH_CHOICES}
  query getSupportCardOnIdWithEvent($uuid: Int!) {
    supportCardId(uuid: $uuid) {
        ...CoreSupportCardField
        ...CardEventWithChoice
    }
  }
`;

type Props = {
    uuid: number
}

const SupportCardDetailContainer: React.FC<Props> = (props: Props) => {
  const {loading, error, data} = useGetSupportCardOnIdWithEventQuery({
      variables: props
  });
  if(loading) return (<p>loading...</p>)
  if(error) return (<p>error</p>)
  if(data == null || data?.supportCardId == null) return (<p>data not exist</p>)
  
  const rawEvents = data?.supportCardId?.cardEvent?.edges

  if(rawEvents == null) return (<p>data not exist</p>)

  const events = rawEvents.map(x => { return {
     title: x?.node?.title!,
     choices: x?.node?.cardEventChoice?.edges!
      .map(x => { return {
        title: x?.node?.title!,
        effect: x?.node?.effect!
      } as CardEventChoice
    })
  } as CardEventWithChoice }).filter(x => x.choices.length > 1);

  return <SupportCardDetail 
    supportCardTitle={data.supportCardId.cardName!}
    cardImage={data.supportCardId.cardImage!}
    event={events} />
}

export default SupportCardDetailContainer
