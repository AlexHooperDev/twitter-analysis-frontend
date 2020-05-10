import React from 'react';

import { Wrapper, Tweet } from './styled';
import { Title } from '../../components/Title';
import { Positive } from '../../components/Positive';

export const MostPositiveTweet = ({ tweet, user }) => (
  <Wrapper>
    <Title copy='Most Positive Tweet' />
    <Positive percentage={tweet.sentiment.score} />
    <Tweet
      href={`https://twitter.com/${user}/status/${tweet.id}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {tweet.tweet}
    </Tweet>
  </Wrapper>
);
