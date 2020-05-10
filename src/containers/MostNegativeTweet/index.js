import React from 'react';

import { Wrapper, Tweet } from './styled';
import { Title } from '../../components/Title';
import { Negative } from '../../components/Negative';

export const MostNegativeTweet = ({ tweet, user }) => (
  <Wrapper>
    <Title copy='Most Negative Tweet' />
    <Negative percentage={tweet.sentiment.score} />
    <Tweet
      href={`https://twitter.com/${user}/status/${tweet.id}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {tweet.tweet}
    </Tweet>
  </Wrapper>
);
