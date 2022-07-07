import { gql } from '@apollo/client';
import React from 'react';
import { useFriendQuery } from '../../generated/friends';
import { FriendDetails } from '../FriendDetails';

gql`
  query Friend {
    friends {
      ...UIFriend
    }
  }
`;

interface FriendListProps {}

export default function FriendList(props: FriendListProps) {
  const { loading, error, data } = useFriendQuery();

  if (loading) return 'loading';
  if (error) throw error;

  return (
    <div>
      {data?.friends.map((friend) => (
        <FriendDetails friend={friend} />
      ))}
    </div>
  );
}
