import React from 'react';
import { Wrapper, PositiveIcon, Percentage, Copy } from './styled';

import positive from '../../assets/positive.svg';

export const Positive = ({ percentage }) => {
  return (
    <Wrapper>
      <PositiveIcon src={positive} />
      <Percentage>{percentage}%</Percentage>
      <Copy>positive</Copy>
    </Wrapper>
  );
}