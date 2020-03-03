import React from 'react';

import { Wrapper, Tweet } from './styled';
import { Title } from '../../components/Title';
import { Negative } from '../../components/Negative';

export const MostNegativeTweet = ({ tweet }) => {
  return (
    <Wrapper><Title copy="Most Negative Tweet" /><Negative percentage={tweet.sentimentScore.Negative.toFixed(3)*100} /><Tweet>{tweet.tweet}</Tweet></Wrapper>
  );
};