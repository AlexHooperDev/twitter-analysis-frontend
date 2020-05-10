import React from 'react';
import { UserTweetWrapper, TweetCopy } from './styled';

export const UserTweet = ({ tweet, sentiment }) => (
  <UserTweetWrapper sentiment={sentiment}>
    <TweetCopy>{tweet}</TweetCopy>
  </UserTweetWrapper>
);
