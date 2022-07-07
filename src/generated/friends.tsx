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

export enum Aptitude {
  Turf = 'TURF',
  Dirt = 'DIRT',
  Short = 'SHORT',
  Mile = 'MILE',
  Medium = 'MEDIUM',
  Long = 'LONG',
  Runner = 'RUNNER',
  Leader = 'LEADER',
  Betweener = 'BETWEENER',
  Chaser = 'CHASER'
}

export type Friend = {
  __typename?: 'Friend';
  kakao_id?: Maybe<Scalars['Int']>;
  friend_code: Scalars['Int'];
  support_kind: Scalars['Int'];
  support_level: Scalars['Int'];
  support_img: Scalars['String'];
  comment: Scalars['String'];
  umamusume: Umamusume;
  parent1: Umamusume;
  parent2: Umamusume;
};

export type Query = {
  __typename?: 'Query';
  umamusumes: Array<Umamusume>;
  friend: Friend;
  friends: Array<Friend>;
};

export enum Star {
  '1' = '_1',
  '2' = '_2',
  '3' = '_3'
}

export enum Status {
  Speed = 'SPEED',
  Stamina = 'STAMINA',
  Power = 'POWER',
  Guts = 'GUTS',
  Wisdom = 'WISDOM'
}

export type Trait = {
  __typename?: 'Trait';
  trait_id: Scalars['Int'];
  trait_star: Star;
};

export type Umamusume = {
  __typename?: 'Umamusume';
  kind: Scalars['Int'];
  status_kind: Scalars['Int'];
  status_star: Star;
  aptitude_kind: Scalars['Int'];
  aptitude_star: Star;
  unique_skill_kind?: Maybe<Scalars['Int']>;
  unique_skill_star?: Maybe<Star>;
  img: Scalars['String'];
  traits?: Maybe<Array<Maybe<Trait>>>;
};

export type UiUmamusumeFragment = (
  { __typename?: 'Umamusume' }
  & Pick<Umamusume, 'status_kind' | 'status_star' | 'aptitude_kind' | 'aptitude_star' | 'unique_skill_kind' | 'unique_skill_star' | 'img'>
  & { traits?: Maybe<Array<Maybe<(
    { __typename?: 'Trait' }
    & Pick<Trait, 'trait_id' | 'trait_star'>
  )>>> }
);

export type UiFriendFragment = (
  { __typename?: 'Friend' }
  & Pick<Friend, 'friend_code' | 'support_img' | 'support_level'>
  & { umamusume: (
    { __typename?: 'Umamusume' }
    & UiUmamusumeFragment
  ), parent1: (
    { __typename?: 'Umamusume' }
    & UiUmamusumeFragment
  ), parent2: (
    { __typename?: 'Umamusume' }
    & UiUmamusumeFragment
  ) }
);

export type FriendQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendQuery = (
  { __typename?: 'Query' }
  & { friends: Array<(
    { __typename?: 'Friend' }
    & UiFriendFragment
  )> }
);

export const UiUmamusumeFragmentDoc = gql`
    fragment UIUmamusume on Umamusume {
  status_kind
  status_star
  aptitude_kind
  aptitude_star
  unique_skill_kind
  unique_skill_star
  img
  traits {
    trait_id
    trait_star
  }
}
    `;
export const UiFriendFragmentDoc = gql`
    fragment UIFriend on Friend {
  friend_code
  support_img
  support_level
  umamusume {
    ...UIUmamusume
  }
  parent1 {
    ...UIUmamusume
  }
  parent2 {
    ...UIUmamusume
  }
}
    ${UiUmamusumeFragmentDoc}`;
export const FriendDocument = gql`
    query Friend {
  friends {
    ...UIFriend
  }
}
    ${UiFriendFragmentDoc}`;

/**
 * __useFriendQuery__
 *
 * To run a query within a React component, call `useFriendQuery` and pass it any options that fit your needs.
 * When your component renders, `useFriendQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFriendQuery({
 *   variables: {
 *   },
 * });
 */
export function useFriendQuery(baseOptions?: Apollo.QueryHookOptions<FriendQuery, FriendQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FriendQuery, FriendQueryVariables>(FriendDocument, options);
      }
export function useFriendLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FriendQuery, FriendQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FriendQuery, FriendQueryVariables>(FriendDocument, options);
        }
export type FriendQueryHookResult = ReturnType<typeof useFriendQuery>;
export type FriendLazyQueryHookResult = ReturnType<typeof useFriendLazyQuery>;
export type FriendQueryResult = Apollo.QueryResult<FriendQuery, FriendQueryVariables>;