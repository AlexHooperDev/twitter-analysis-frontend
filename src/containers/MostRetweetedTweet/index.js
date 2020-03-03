import React from 'react';

import { Wrapper, Tweet } from '../MostLikedTweet/styled'
import { Title } from '../../components/Title';
import { Retweeted } from '../../components/Retweeted';

export const MostRetweetedTweet = ({ tweet }) => {
  return (
    <Wrapper>
      <Title copy="Most retweeted Tweet" />
      <Retweeted rtAmount={tweet.retweet_count} />
      <Tweet>{tweet.full_text}</Tweet>
    </Wrapper>
  );
}