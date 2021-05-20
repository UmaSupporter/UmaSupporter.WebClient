import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BuffType = {
  __typename?: 'BuffType';
  uuid: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  nameKr?: Maybe<Scalars['String']>;
  effectKr?: Maybe<Scalars['String']>;
  isDebuff?: Maybe<Scalars['Boolean']>;
};

export type CardEventChoiceType = Node & {
  __typename?: 'CardEventChoiceType';
  uuid: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  titleKr?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  effectKr?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['Int']>;
  event?: Maybe<CardEventType>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type CardEventChoiceTypeConnection = {
  __typename?: 'CardEventChoiceTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CardEventChoiceTypeEdge>>;
};

/** A Relay edge containing a `CardEventChoiceType` and its cursor. */
export type CardEventChoiceTypeEdge = {
  __typename?: 'CardEventChoiceTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CardEventChoiceType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CardEventType = Node & {
  __typename?: 'CardEventType';
  uuid: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  titleKr?: Maybe<Scalars['String']>;
  supportCardId?: Maybe<Scalars['Int']>;
  supportCard?: Maybe<SupportCardType>;
  cardEventChoice?: Maybe<CardEventChoiceTypeConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type CardEventTypeCardEventChoiceArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type CardEventTypeConnection = {
  __typename?: 'CardEventTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CardEventTypeEdge>>;
};

/** A Relay edge containing a `CardEventType` and its cursor. */
export type CardEventTypeEdge = {
  __typename?: 'CardEventTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CardEventType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum CardSkillCategoryEnum {
  Growth = 'GROWTH',
  Belong = 'BELONG'
}

export type CardSkillType = {
  __typename?: 'CardSkillType';
  cardUuid: Scalars['ID'];
  skillUuid: Scalars['ID'];
  category: CardSkillCategoryEnum;
  card?: Maybe<SupportCardType>;
  skill?: Maybe<SkillType>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  buffWithName?: Maybe<BuffType>;
  skillName?: Maybe<SkillType>;
  skill?: Maybe<Array<Maybe<SkillType>>>;
  umamusume?: Maybe<Array<Maybe<UmamusumeType>>>;
  umamusumeId?: Maybe<UmamusumeType>;
  supportCard?: Maybe<Array<Maybe<SupportCardType>>>;
  supportCardId?: Maybe<SupportCardType>;
  /** The ID of the object */
  node?: Maybe<Node>;
};


export type QueryBuffWithNameArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QuerySkillNameArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryUmamusumeArgs = {
  umaName?: Maybe<Scalars['String']>;
  rareDegree?: Maybe<Scalars['Int']>;
};


export type QueryUmamusumeIdArgs = {
  uuid: Scalars['Int'];
};


export type QuerySupportCardArgs = {
  cardName?: Maybe<Scalars['String']>;
  rareDegree?: Maybe<Scalars['String']>;
};


export type QuerySupportCardIdArgs = {
  uuid: Scalars['Int'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** An enumeration. */
export enum SkillBuffTypeEnum {
  Endurance = 'ENDURANCE',
  Acceleration = 'ACCELERATION',
  Velocity = 'VELOCITY',
  Stamina = 'STAMINA',
  Intelligence = 'INTELLIGENCE',
  Guts = 'GUTS',
  Speed = 'SPEED',
  Power = 'POWER',
  DebufSpeed = 'DEBUF_SPEED',
  Start = 'START',
  Provocation = 'PROVOCATION',
  Position = 'POSITION',
  Eyesight = 'EYESIGHT',
  DebufEyesight = 'DEBUF_EYESIGHT',
  DebufStamina = 'DEBUF_STAMINA',
  Physical = 'PHYSICAL'
}

export type SkillBuffTypeType = {
  __typename?: 'SkillBuffTypeType';
  uuid: Scalars['ID'];
  name: SkillBuffTypeEnum;
  skill?: Maybe<Array<Maybe<SkillType>>>;
};

/** An enumeration. */
export enum SkillDistanceTypeEnum {
  Short = 'SHORT',
  Mile = 'MILE',
  Medium = 'MEDIUM',
  Long = 'LONG',
  Dirt = 'DIRT'
}

export type SkillDistanceTypeType = {
  __typename?: 'SkillDistanceTypeType';
  uuid: Scalars['ID'];
  name: SkillDistanceTypeEnum;
  skill?: Maybe<Array<Maybe<SkillType>>>;
};

/** An enumeration. */
export enum SkillGradeEnum {
  Normal = 'NORMAL',
  Rare = 'RARE',
  Original = 'ORIGINAL'
}

export type SkillGradeType = {
  __typename?: 'SkillGradeType';
  uuid: Scalars['ID'];
  name: SkillGradeEnum;
  skill?: Maybe<Array<Maybe<SkillType>>>;
};

/** An enumeration. */
export enum SkillOperationTypeEnum {
  Getaway = 'GETAWAY',
  Preceding = 'PRECEDING',
  PreEntry = 'PRE_ENTRY',
  PostEntry = 'POST_ENTRY'
}

export type SkillOperationTypeType = {
  __typename?: 'SkillOperationTypeType';
  uuid: Scalars['ID'];
  name: SkillOperationTypeEnum;
  skill?: Maybe<Array<Maybe<SkillType>>>;
};

export type SkillType = {
  __typename?: 'SkillType';
  uuid: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  nameKr?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  grade?: Maybe<SkillGradeType>;
  buffType?: Maybe<SkillBuffTypeType>;
  distanceType?: Maybe<SkillDistanceTypeType>;
  operationType?: Maybe<SkillOperationTypeType>;
  cards?: Maybe<Array<Maybe<CardSkillType>>>;
  umaTachi?: Maybe<Array<Maybe<UmaSkillType>>>;
};

export type SupportCardType = Node & {
  __typename?: 'SupportCardType';
  uuid: Scalars['ID'];
  cardName?: Maybe<Scalars['String']>;
  cardNameKr?: Maybe<Scalars['String']>;
  cardType?: Maybe<Scalars['String']>;
  cardTypeKr?: Maybe<Scalars['String']>;
  cardImage?: Maybe<Scalars['String']>;
  gamewithWikiId?: Maybe<Scalars['Int']>;
  rareDegree?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  secondNameKr?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<CardSkillType>>>;
  cardEvent?: Maybe<CardEventTypeConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type SupportCardTypeCardEventArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UmaEventChoiceType = Node & {
  __typename?: 'UmaEventChoiceType';
  uuid: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  titleKr?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  effectKr?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['Int']>;
  event?: Maybe<UmaEventType>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type UmaEventChoiceTypeConnection = {
  __typename?: 'UmaEventChoiceTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UmaEventChoiceTypeEdge>>;
};

/** A Relay edge containing a `UmaEventChoiceType` and its cursor. */
export type UmaEventChoiceTypeEdge = {
  __typename?: 'UmaEventChoiceTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UmaEventChoiceType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UmaEventType = Node & {
  __typename?: 'UmaEventType';
  uuid: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  titleKr?: Maybe<Scalars['String']>;
  umamusumeId?: Maybe<Scalars['Int']>;
  umamusume?: Maybe<UmamusumeType>;
  umaEventChoice?: Maybe<UmaEventChoiceTypeConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type UmaEventTypeUmaEventChoiceArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UmaEventTypeConnection = {
  __typename?: 'UmaEventTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UmaEventTypeEdge>>;
};

/** A Relay edge containing a `UmaEventType` and its cursor. */
export type UmaEventTypeEdge = {
  __typename?: 'UmaEventTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UmaEventType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum UmaSkillCategoryEnum {
  Origin = 'ORIGIN',
  Basic = 'BASIC',
  Awakening = 'AWAKENING'
}

export type UmaSkillType = {
  __typename?: 'UmaSkillType';
  umaUuid: Scalars['ID'];
  skillUuid: Scalars['ID'];
  category: UmaSkillCategoryEnum;
  uma?: Maybe<UmamusumeType>;
  skill?: Maybe<SkillType>;
};

export type UmamusumeType = Node & {
  __typename?: 'UmamusumeType';
  uuid: Scalars['ID'];
  umaName?: Maybe<Scalars['String']>;
  umaNameKr?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  secondNameKr?: Maybe<Scalars['String']>;
  umaImage?: Maybe<Scalars['String']>;
  gamewithWikiId?: Maybe<Scalars['Int']>;
  rareDegree?: Maybe<Scalars['Int']>;
  skills?: Maybe<Array<Maybe<UmaSkillType>>>;
  umaEvent?: Maybe<UmaEventTypeConnection>;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type UmamusumeTypeUmaEventArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type EffectFacadeQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type EffectFacadeQuery = (
  { __typename?: 'Query' }
  & { skillName?: Maybe<(
    { __typename?: 'SkillType' }
    & Pick<SkillType, 'name' | 'nameKr' | 'description' | 'icon'>
  )>, buffWithName?: Maybe<(
    { __typename?: 'BuffType' }
    & Pick<BuffType, 'name' | 'nameKr' | 'effectKr' | 'isDebuff'>
  )> }
);

export type GetSkillWithNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSkillWithNameQuery = (
  { __typename?: 'Query' }
  & { skillName?: Maybe<(
    { __typename?: 'SkillType' }
    & Pick<SkillType, 'name' | 'nameKr' | 'description' | 'icon'>
  )> }
);

export type GetSupportCardOnIdQueryVariables = Exact<{
  uuid: Scalars['Int'];
}>;


export type GetSupportCardOnIdQuery = (
  { __typename?: 'Query' }
  & { supportCardId?: Maybe<(
    { __typename?: 'SupportCardType' }
    & Pick<SupportCardType, 'cardType'>
    & CoreSupportCardFieldFragment
  )> }
);

export type GetSupportCardOnIdWithEventQueryVariables = Exact<{
  uuid: Scalars['Int'];
}>;


export type GetSupportCardOnIdWithEventQuery = (
  { __typename?: 'Query' }
  & { supportCardId?: Maybe<(
    { __typename?: 'SupportCardType' }
    & CoreSupportCardFieldFragment
    & CardEventWithChoiceFragment
  )> }
);

export type SupportCardQueryVariables = Exact<{ [key: string]: never; }>;


export type SupportCardQuery = (
  { __typename?: 'Query' }
  & { supportCard?: Maybe<Array<Maybe<(
    { __typename?: 'SupportCardType' }
    & CoreSupportCardFieldFragment
  )>>> }
);

export type GetUmaOnIdWithEventQueryVariables = Exact<{
  uuid: Scalars['Int'];
}>;


export type GetUmaOnIdWithEventQuery = (
  { __typename?: 'Query' }
  & { umamusumeId?: Maybe<(
    { __typename?: 'UmamusumeType' }
    & Pick<UmamusumeType, 'uuid' | 'umaName' | 'secondName' | 'rareDegree' | 'umaImage'>
    & UmaEventWithChoiceFragment
  )> }
);

export type UmaListQueryVariables = Exact<{ [key: string]: never; }>;


export type UmaListQuery = (
  { __typename?: 'Query' }
  & { umamusume?: Maybe<Array<Maybe<(
    { __typename?: 'UmamusumeType' }
    & Pick<UmamusumeType, 'uuid' | 'umaName' | 'secondName' | 'rareDegree' | 'umaImage'>
  )>>> }
);

export type CoreSupportCardFieldFragment = (
  { __typename?: 'SupportCardType' }
  & Pick<SupportCardType, 'uuid' | 'cardName' | 'cardNameKr' | 'secondName' | 'secondNameKr' | 'rareDegree' | 'cardImage' | 'cardType' | 'cardTypeKr'>
);

export type CardEventChoiceFragment = (
  { __typename?: 'CardEventType' }
  & { cardEventChoice?: Maybe<(
    { __typename?: 'CardEventChoiceTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CardEventChoiceTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CardEventChoiceType' }
        & Pick<CardEventChoiceType, 'title' | 'effect' | 'effectKr'>
      )> }
    )>> }
  )> }
);

export type CardEventFragment = (
  { __typename?: 'SupportCardType' }
  & { cardEvent?: Maybe<(
    { __typename?: 'CardEventTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CardEventTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CardEventType' }
        & Pick<CardEventType, 'title'>
      )> }
    )>> }
  )> }
);

export type CardEventWithChoiceFragment = (
  { __typename?: 'SupportCardType' }
  & { cardEvent?: Maybe<(
    { __typename?: 'CardEventTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CardEventTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CardEventType' }
        & Pick<CardEventType, 'title' | 'titleKr'>
        & CardEventChoiceFragment
      )> }
    )>> }
  )> }
);

export type UmaEventChoiceFragment = (
  { __typename?: 'UmaEventType' }
  & { umaEventChoice?: Maybe<(
    { __typename?: 'UmaEventChoiceTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UmaEventChoiceTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UmaEventChoiceType' }
        & Pick<UmaEventChoiceType, 'title' | 'titleKr' | 'effect' | 'effectKr'>
      )> }
    )>> }
  )> }
);

export type UmaEventFragment = (
  { __typename?: 'UmamusumeType' }
  & { umaEvent?: Maybe<(
    { __typename?: 'UmaEventTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UmaEventTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UmaEventType' }
        & Pick<UmaEventType, 'title' | 'titleKr'>
      )> }
    )>> }
  )> }
);

export type UmaEventWithChoiceFragment = (
  { __typename?: 'UmamusumeType' }
  & { umaEvent?: Maybe<(
    { __typename?: 'UmaEventTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UmaEventTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UmaEventType' }
        & Pick<UmaEventType, 'title' | 'titleKr'>
        & UmaEventChoiceFragment
      )> }
    )>> }
  )> }
);

export type GetUmaInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUmaInfoQuery = (
  { __typename?: 'Query' }
  & { umamusume?: Maybe<Array<Maybe<(
    { __typename?: 'UmamusumeType' }
    & Pick<UmamusumeType, 'uuid' | 'umaName' | 'umaNameKr' | 'secondName' | 'secondNameKr' | 'umaImage' | 'gamewithWikiId' | 'rareDegree'>
    & { skills?: Maybe<Array<Maybe<(
      { __typename?: 'UmaSkillType' }
      & Pick<UmaSkillType, 'category'>
      & { skill?: Maybe<(
        { __typename?: 'SkillType' }
        & Pick<SkillType, 'name'>
        & { grade?: Maybe<(
          { __typename?: 'SkillGradeType' }
          & Pick<SkillGradeType, 'name'>
        )>, buffType?: Maybe<(
          { __typename?: 'SkillBuffTypeType' }
          & Pick<SkillBuffTypeType, 'name'>
        )>, distanceType?: Maybe<(
          { __typename?: 'SkillDistanceTypeType' }
          & Pick<SkillDistanceTypeType, 'name'>
        )>, operationType?: Maybe<(
          { __typename?: 'SkillOperationTypeType' }
          & Pick<SkillOperationTypeType, 'name'>
        )> }
      )> }
    )>>> }
  )>>> }
);

export const CoreSupportCardFieldFragmentDoc = gql`
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
export const CardEventFragmentDoc = gql`
    fragment CardEvent on SupportCardType {
  cardEvent {
    edges {
      node {
        title
      }
    }
  }
}
    `;
export const CardEventChoiceFragmentDoc = gql`
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
export const CardEventWithChoiceFragmentDoc = gql`
    fragment CardEventWithChoice on SupportCardType {
  cardEvent {
    edges {
      node {
        title
        titleKr
        ...CardEventChoice
      }
    }
  }
}
    ${CardEventChoiceFragmentDoc}`;
export const UmaEventFragmentDoc = gql`
    fragment UmaEvent on UmamusumeType {
  umaEvent {
    edges {
      node {
        title
        titleKr
      }
    }
  }
}
    `;
export const UmaEventChoiceFragmentDoc = gql`
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
export const UmaEventWithChoiceFragmentDoc = gql`
    fragment UmaEventWithChoice on UmamusumeType {
  umaEvent {
    edges {
      node {
        title
        titleKr
        ...UmaEventChoice
      }
    }
  }
}
    ${UmaEventChoiceFragmentDoc}`;
export const EffectFacadeDocument = gql`
    query effectFacade($name: String!) {
  skillName(name: $name) {
    name
    nameKr
    description
    icon
  }
  buffWithName(name: $name) {
    name
    nameKr
    effectKr
    isDebuff
  }
}
    `;

/**
 * __useEffectFacadeQuery__
 *
 * To run a query within a React component, call `useEffectFacadeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEffectFacadeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEffectFacadeQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useEffectFacadeQuery(baseOptions: Apollo.QueryHookOptions<EffectFacadeQuery, EffectFacadeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EffectFacadeQuery, EffectFacadeQueryVariables>(EffectFacadeDocument, options);
      }
export function useEffectFacadeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EffectFacadeQuery, EffectFacadeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EffectFacadeQuery, EffectFacadeQueryVariables>(EffectFacadeDocument, options);
        }
export type EffectFacadeQueryHookResult = ReturnType<typeof useEffectFacadeQuery>;
export type EffectFacadeLazyQueryHookResult = ReturnType<typeof useEffectFacadeLazyQuery>;
export type EffectFacadeQueryResult = Apollo.QueryResult<EffectFacadeQuery, EffectFacadeQueryVariables>;
export const GetSkillWithNameDocument = gql`
    query getSkillWithName($name: String!) {
  skillName(name: $name) {
    name
    nameKr
    description
    icon
  }
}
    `;

/**
 * __useGetSkillWithNameQuery__
 *
 * To run a query within a React component, call `useGetSkillWithNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillWithNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillWithNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSkillWithNameQuery(baseOptions: Apollo.QueryHookOptions<GetSkillWithNameQuery, GetSkillWithNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillWithNameQuery, GetSkillWithNameQueryVariables>(GetSkillWithNameDocument, options);
      }
export function useGetSkillWithNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillWithNameQuery, GetSkillWithNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillWithNameQuery, GetSkillWithNameQueryVariables>(GetSkillWithNameDocument, options);
        }
export type GetSkillWithNameQueryHookResult = ReturnType<typeof useGetSkillWithNameQuery>;
export type GetSkillWithNameLazyQueryHookResult = ReturnType<typeof useGetSkillWithNameLazyQuery>;
export type GetSkillWithNameQueryResult = Apollo.QueryResult<GetSkillWithNameQuery, GetSkillWithNameQueryVariables>;
export const GetSupportCardOnIdDocument = gql`
    query getSupportCardOnId($uuid: Int!) {
  supportCardId(uuid: $uuid) {
    ...CoreSupportCardField
    cardType
  }
}
    ${CoreSupportCardFieldFragmentDoc}`;

/**
 * __useGetSupportCardOnIdQuery__
 *
 * To run a query within a React component, call `useGetSupportCardOnIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportCardOnIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportCardOnIdQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetSupportCardOnIdQuery(baseOptions: Apollo.QueryHookOptions<GetSupportCardOnIdQuery, GetSupportCardOnIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupportCardOnIdQuery, GetSupportCardOnIdQueryVariables>(GetSupportCardOnIdDocument, options);
      }
export function useGetSupportCardOnIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupportCardOnIdQuery, GetSupportCardOnIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupportCardOnIdQuery, GetSupportCardOnIdQueryVariables>(GetSupportCardOnIdDocument, options);
        }
export type GetSupportCardOnIdQueryHookResult = ReturnType<typeof useGetSupportCardOnIdQuery>;
export type GetSupportCardOnIdLazyQueryHookResult = ReturnType<typeof useGetSupportCardOnIdLazyQuery>;
export type GetSupportCardOnIdQueryResult = Apollo.QueryResult<GetSupportCardOnIdQuery, GetSupportCardOnIdQueryVariables>;
export const GetSupportCardOnIdWithEventDocument = gql`
    query getSupportCardOnIdWithEvent($uuid: Int!) {
  supportCardId(uuid: $uuid) {
    ...CoreSupportCardField
    ...CardEventWithChoice
  }
}
    ${CoreSupportCardFieldFragmentDoc}
${CardEventWithChoiceFragmentDoc}`;

/**
 * __useGetSupportCardOnIdWithEventQuery__
 *
 * To run a query within a React component, call `useGetSupportCardOnIdWithEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSupportCardOnIdWithEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSupportCardOnIdWithEventQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetSupportCardOnIdWithEventQuery(baseOptions: Apollo.QueryHookOptions<GetSupportCardOnIdWithEventQuery, GetSupportCardOnIdWithEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSupportCardOnIdWithEventQuery, GetSupportCardOnIdWithEventQueryVariables>(GetSupportCardOnIdWithEventDocument, options);
      }
export function useGetSupportCardOnIdWithEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSupportCardOnIdWithEventQuery, GetSupportCardOnIdWithEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSupportCardOnIdWithEventQuery, GetSupportCardOnIdWithEventQueryVariables>(GetSupportCardOnIdWithEventDocument, options);
        }
export type GetSupportCardOnIdWithEventQueryHookResult = ReturnType<typeof useGetSupportCardOnIdWithEventQuery>;
export type GetSupportCardOnIdWithEventLazyQueryHookResult = ReturnType<typeof useGetSupportCardOnIdWithEventLazyQuery>;
export type GetSupportCardOnIdWithEventQueryResult = Apollo.QueryResult<GetSupportCardOnIdWithEventQuery, GetSupportCardOnIdWithEventQueryVariables>;
export const SupportCardDocument = gql`
    query supportCard {
  supportCard {
    ...CoreSupportCardField
  }
}
    ${CoreSupportCardFieldFragmentDoc}`;

/**
 * __useSupportCardQuery__
 *
 * To run a query within a React component, call `useSupportCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupportCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupportCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useSupportCardQuery(baseOptions?: Apollo.QueryHookOptions<SupportCardQuery, SupportCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupportCardQuery, SupportCardQueryVariables>(SupportCardDocument, options);
      }
export function useSupportCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupportCardQuery, SupportCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupportCardQuery, SupportCardQueryVariables>(SupportCardDocument, options);
        }
export type SupportCardQueryHookResult = ReturnType<typeof useSupportCardQuery>;
export type SupportCardLazyQueryHookResult = ReturnType<typeof useSupportCardLazyQuery>;
export type SupportCardQueryResult = Apollo.QueryResult<SupportCardQuery, SupportCardQueryVariables>;
export const GetUmaOnIdWithEventDocument = gql`
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
    ${UmaEventWithChoiceFragmentDoc}`;

/**
 * __useGetUmaOnIdWithEventQuery__
 *
 * To run a query within a React component, call `useGetUmaOnIdWithEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUmaOnIdWithEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUmaOnIdWithEventQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetUmaOnIdWithEventQuery(baseOptions: Apollo.QueryHookOptions<GetUmaOnIdWithEventQuery, GetUmaOnIdWithEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUmaOnIdWithEventQuery, GetUmaOnIdWithEventQueryVariables>(GetUmaOnIdWithEventDocument, options);
      }
export function useGetUmaOnIdWithEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUmaOnIdWithEventQuery, GetUmaOnIdWithEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUmaOnIdWithEventQuery, GetUmaOnIdWithEventQueryVariables>(GetUmaOnIdWithEventDocument, options);
        }
export type GetUmaOnIdWithEventQueryHookResult = ReturnType<typeof useGetUmaOnIdWithEventQuery>;
export type GetUmaOnIdWithEventLazyQueryHookResult = ReturnType<typeof useGetUmaOnIdWithEventLazyQuery>;
export type GetUmaOnIdWithEventQueryResult = Apollo.QueryResult<GetUmaOnIdWithEventQuery, GetUmaOnIdWithEventQueryVariables>;
export const UmaListDocument = gql`
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

/**
 * __useUmaListQuery__
 *
 * To run a query within a React component, call `useUmaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUmaListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUmaListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUmaListQuery(baseOptions?: Apollo.QueryHookOptions<UmaListQuery, UmaListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UmaListQuery, UmaListQueryVariables>(UmaListDocument, options);
      }
export function useUmaListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UmaListQuery, UmaListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UmaListQuery, UmaListQueryVariables>(UmaListDocument, options);
        }
export type UmaListQueryHookResult = ReturnType<typeof useUmaListQuery>;
export type UmaListLazyQueryHookResult = ReturnType<typeof useUmaListLazyQuery>;
export type UmaListQueryResult = Apollo.QueryResult<UmaListQuery, UmaListQueryVariables>;
export const GetUmaInfoDocument = gql`
    query getUmaInfo {
  umamusume {
    uuid
    umaName
    umaNameKr
    secondName
    secondNameKr
    umaImage
    gamewithWikiId
    rareDegree
    skills {
      category
      skill {
        name
        grade {
          name
        }
        buffType {
          name
        }
        distanceType {
          name
        }
        operationType {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetUmaInfoQuery__
 *
 * To run a query within a React component, call `useGetUmaInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUmaInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUmaInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUmaInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUmaInfoQuery, GetUmaInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUmaInfoQuery, GetUmaInfoQueryVariables>(GetUmaInfoDocument, options);
      }
export function useGetUmaInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUmaInfoQuery, GetUmaInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUmaInfoQuery, GetUmaInfoQueryVariables>(GetUmaInfoDocument, options);
        }
export type GetUmaInfoQueryHookResult = ReturnType<typeof useGetUmaInfoQuery>;
export type GetUmaInfoLazyQueryHookResult = ReturnType<typeof useGetUmaInfoLazyQuery>;
export type GetUmaInfoQueryResult = Apollo.QueryResult<GetUmaInfoQuery, GetUmaInfoQueryVariables>;