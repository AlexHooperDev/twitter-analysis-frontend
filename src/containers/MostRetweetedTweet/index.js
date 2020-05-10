import React from 'react';

import { Wrapper, Tweet } from '../MostLikedTweet/styled';
import { Title } from '../../components/Title';
import { Retweeted } from '../../components/Retweeted';

const formatNum = /\B(?=(\d{3})+(?!\d))/g;

export const MostRetweetedTweet = ({ tweet, user }) => (
  <Wrapper>
    <Title copy='Most Retweeted Tweet' />
    <Retweeted
      rtAmount={tweet.retweet_count.toString().replace(formatNum, ',')}
    />
    <Tweet
      href={`https://twitter.com/${user}/status/${tweet.id_str}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {tweet.full_text}
    </Tweet>
  </Wrapper>
);
