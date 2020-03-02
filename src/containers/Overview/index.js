import React from 'react';

import { OverviewWrapper, Avatar, ProfileDetails, Header, Fullname, Joined, Followers, Number, Bio } from './styled';

export const Overview = ({ user, name, userSince, followCount, friendCount, bio, avatar }) => {
  return (
    <OverviewWrapper>
      <Avatar src={avatar} />
      <ProfileDetails>
        <Header>{user}</Header>
        <Fullname>{name}</Fullname>
        {/* <Joined>Joined on {userSince}</Joined> */}
        <Followers><Number>{followCount}</Number> followers<Number>{friendCount}</Number> following</Followers>
        <Bio>{bio}</Bio>
      </ProfileDetails>
    </OverviewWrapper>
  );
}