import React, { useEffect } from 'react';

import {
  OverviewWrapper,
  Avatar,
  ProfileDetails,
  Header,
  Fullname,
  Joined,
  Followers,
  Number,
  Bio,
} from './styled';

export const Overview = ({
  user,
  name,
  userSince,
  followCount,
  friendCount,
  bio,
  avatar,
}) => {
  const formatNum = /\B(?=(\d{3})+(?!\d))/g;

  useEffect(() => {
    console.log(followCount);
  }, [followCount]);

  return (
    <OverviewWrapper>
      <Avatar src={avatar} />
      <ProfileDetails>
        <Header>{user}</Header>
        <Fullname>{name}</Fullname>
        <Followers>
          <Number>{followCount.toString().replace(formatNum, ',')}</Number>
          {' '}
          followers
          <Number>{friendCount.toString().replace(formatNum, ',')}</Number>
          {' '}
          following
        </Followers>
        <Bio>{bio}</Bio>
      </ProfileDetails>
    </OverviewWrapper>
  );
};
