import React from 'react';

import { Wrapper, Tweet } from './styled';
import { Title } from '../../components/Title';
import { Liked } from '../../components/Liked';

const formatNum = /\B(?=(\d{3})+(?!\d))/g;

export const MostLikedTweet = ({ tweet, user }) => (
  <Wrapper>
    <Title copy='Most Liked Tweet' />
    <Liked likes={tweet.favorite_count.toString().replace(formatNum, ',')} />
    <Tweet
      href={`https://twitter.com/${user}/status/${tweet.id_str}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {tweet.full_text}
    </Tweet>
  </Wrapper>
);
