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

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  node?: Maybe<Node>;
  supportCard?: Maybe<Array<Maybe<SupportCardType>>>;
  supportCardId?: Maybe<SupportCardType>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QuerySupportCardArgs = {
  cardName?: Maybe<Scalars['String']>;
  rareDegree?: Maybe<Scalars['String']>;
};


export type QuerySupportCardIdArgs = {
  uuid: Scalars['Int'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type SupportCardType = Node & {
  __typename?: 'SupportCardType';
  uuid: Scalars['ID'];
  cardName?: Maybe<Scalars['String']>;
  cardType?: Maybe<Scalars['String']>;
  cardImage?: Maybe<Scalars['String']>;
  gamewithWikiId?: Maybe<Scalars['Int']>;
  rareDegree?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
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

export type CardEventTypeConnection = {
  __typename?: 'CardEventTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CardEventTypeEdge>>;
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

/** A Relay edge containing a `CardEventType` and its cursor. */
export type CardEventTypeEdge = {
  __typename?: 'CardEventTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CardEventType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CardEventType = Node & {
  __typename?: 'CardEventType';
  uuid: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
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

export type CardEventChoiceType = Node & {
  __typename?: 'CardEventChoiceType';
  uuid: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['Int']>;
  event?: Maybe<CardEventType>;
  /** The ID of the object. */
  id: Scalars['ID'];
};

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

export type CoreSupportCardFieldFragment = (
  { __typename?: 'SupportCardType' }
  & Pick<SupportCardType, 'uuid' | 'cardName' | 'secondName' | 'rareDegree' | 'cardImage' | 'cardType'>
);

export type CardEventChoiceFragment = (
  { __typename?: 'CardEventType' }
  & { cardEventChoice?: Maybe<(
    { __typename?: 'CardEventChoiceTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CardEventChoiceTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CardEventChoiceType' }
        & Pick<CardEventChoiceType, 'title' | 'effect'>
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
        & Pick<CardEventType, 'title'>
        & CardEventChoiceFragment
      )> }
    )>> }
  )> }
);

export const CoreSupportCardFieldFragmentDoc = gql`
    fragment CoreSupportCardField on SupportCardType {
  uuid
  cardName
  secondName
  rareDegree
  cardImage
  cardType
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
        ...CardEventChoice
      }
    }
  }
}
    ${CardEventChoiceFragmentDoc}`;
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