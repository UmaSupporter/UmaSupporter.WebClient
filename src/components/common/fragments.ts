import gql from "graphql-tag";

export const CORE_SUPPORT_CARD_FIELD = gql`
  fragment CoreSupportCardField on SupportCardType {
      uuid
      cardName
      cardNameKr
      secondName
      secondNameKr
      rareDegree
      cardImage
      cardType
      cardTypeKr
  }
`;

export const CARD_EVENT_CHOICE_FIELD = gql`
  fragment CardEventChoice on CardEventType {
      cardEventChoice {
          edges {
              node {
                  title
                  effect
                  effectKr
              }
          }
      }
  }
`;

export const CARD_EVENT_FIELD = gql`
  fragment CardEvent on SupportCardType {
      cardEvent{
        edges{
          node {
            title
          }
        }
      }
  }
`;

export const CARD_EVENT_FIELD_WITH_CHOICES = gql`
  ${CARD_EVENT_CHOICE_FIELD}
  fragment CardEventWithChoice on SupportCardType {
      cardEvent{
        edges{
          node {
            title
            ...CardEventChoice
          }
        }
      }
  }
`;

export const UMA_EVENT_CHOICE_FIELD = gql`
  fragment UmaEventChoice on UmaEventType {
      umaEventChoice {
          edges {
              node {
                  title
                  titleKr
                  effect
                  effectKr
              }
          }
      }
  }
`;

export const UMA_EVENT_FIELD = gql`
  fragment UmaEvent on UmamusumeType {
      umaEvent{
        edges{
          node {
            title
            titleKr
          }
        }
      }
  }
`;

export const UMA_EVENT_FIELD_WITH_CHOICES = gql`
  ${UMA_EVENT_CHOICE_FIELD}
  fragment UmaEventWithChoice on UmamusumeType {
      umaEvent{
        edges{
          node {
            title
            titleKr
            ...UmaEventChoice
          }
        }
      }
  }
`;
