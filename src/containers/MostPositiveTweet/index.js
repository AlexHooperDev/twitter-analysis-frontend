import React from 'react';

import { Wrapper, Tweet } from './styled';
import { Title } from '../../components/Title';
import { Positive } from '../../components/Positive';

export const MostPositiveTweet = ({ tweet }) => {
  return (
    <Wrapper><Title copy="Most Positive Tweet" /><Positive percentage={tweet.sentimentScore.Positive.toFixed(3)*100} /><Tweet>{tweet.tweet}</Tweet></Wrapper>
  );
};