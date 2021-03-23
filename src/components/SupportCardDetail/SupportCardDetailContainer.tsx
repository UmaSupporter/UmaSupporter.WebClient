import gql from "graphql-tag";
import { useGetSupportCardOnIdWithEventQuery } from "../../generated/graphql";
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
  if(data === undefined || data.supportCardId === undefined) return (<p>data not exist</p>)

  return <SupportCardDetail cards={data} />
}

export default SupportCardDetailContainer
