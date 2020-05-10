import React from 'react';
import { Wrapper, Retweet, Rts } from './styled';

import retweet from '../../assets/retweet.svg';

export const Retweeted = ({ rtAmount }) => (
  <Wrapper>
    <Retweet src={retweet} />
    <Rts>{rtAmount}</Rts>
  </Wrapper>
);
