import gql from 'graphql-tag';
import { useGetUmaOnIdWithEventQuery } from '../../generated/graphql';
import { UmaEventChoice, UmaEventWithChoice } from '../../types';
import { UMA_EVENT_FIELD_WITH_CHOICES } from '../common/fragments';
import UmaDetailComponent from './UmaDetailComponent';
import UmaDetailNotExistComponent from './UmaDetailNotExistComponent';
import { generalEventName } from '../../common/utils'

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

type Props = {
  uuid: number;
  toggleUmaPage: () => void;
};

const UmaDetailContainer: React.FC<Props> = (props: Props) => {
  const { loading, error, data } = useGetUmaOnIdWithEventQuery({
    variables: props,
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  if (data == null || data?.umamusumeId == null)
    return <UmaDetailNotExistComponent />;

  const rawEvents = data!.umamusumeId!.umaEvent?.edges;

  if (rawEvents == null) return <p>data not exist</p>;

  const events = rawEvents
    .map((x) => {
      return {
        title: x?.node?.title!,
        titleKr: x?.node?.titleKr!,
        choices: x?.node?.umaEventChoice?.edges!.map((x) => {
          return {
            title: x?.node?.title!,
            effect: x?.node?.effectKr!,
          } as UmaEventChoice;
        }),
      } as UmaEventWithChoice;
    })
    .filter((x) => x.choices.length > 1);


  const orderedList: UmaEventWithChoice[] = [];
  events.forEach(x => {
    if(generalEventName.includes(x.title) 
      || x.title.includes("の後に")
      || x.title.slice(0,3) === "レース") {
      orderedList.push(x);
    }
    else {
      orderedList.unshift(x);
    }
  });

  const { umamusumeId } = data;

  return (
    <UmaDetailComponent
      uuid={Number(umamusumeId.uuid!)}
      umaName={umamusumeId.umaName!}
      umaImage={umamusumeId.umaImage!}
      secondName={umamusumeId.secondName!}
      rareDegree={String(umamusumeId.rareDegree!)}
      event={orderedList}
      toggleUmaPage={props.toggleUmaPage}
    />
  );
};

export default UmaDetailContainer;
