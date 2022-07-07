import gql from 'graphql-tag';
import React from 'react';
import { UiFriendFragment } from '../../generated/friends';

interface FriendDetailsProps {
  friend: UiFriendFragment
}

gql`
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
`

export default function FriendDetails({friend}: FriendDetailsProps) {
  return <div>
    {friend.friend_code}
  </div>;
}
