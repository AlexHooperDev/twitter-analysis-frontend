import React from 'react';

import { OverviewWrapper, Avatar, ProfileDetails, Header, Fullname, Joined, Followers } from './styled';

export const Overview = ({ user, name, userSince, followCount }) => {
  return (
    <OverviewWrapper>
      <Avatar src="https://www.placecage.com/200/200" />
      <ProfileDetails>
        <Header>{ user }</Header>
        <Fullname>{ name }</Fullname>
        <Joined>Joined on { userSince }</Joined>
        <Followers>{ followCount } followers</Followers>
      </ProfileDetails>
    </OverviewWrapper>
  );
}