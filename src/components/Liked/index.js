import React from 'react';
import { Wrapper, Heart, Likes } from './styled';

import heart from '../../assets/heart.svg';

export const Liked = ({ likes }) => (
  <Wrapper>
    <Heart src={heart} />
    <Likes>{likes}</Likes>
  </Wrapper>
);
