import React from 'react';

import { Wrapper, Tweet } from './styled';
import { Title } from '../../components/Title';
import { Liked } from '../../components/Liked';

export const MostLikedTweet = ({ tweet }) => {
  return (
    <Wrapper><Title copy="Most liked Tweet" /><Liked likes={tweet.favorite_count} /><Tweet>{tweet.full_text}</Tweet></Wrapper>
  );
};