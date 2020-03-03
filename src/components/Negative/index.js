import React from 'react';
import { Wrapper, NegativeIcon, Percentage, Copy } from './styled';

import negative from '../../assets/negative.svg';

export const Negative = ({ percentage }) => {
  return (
    <Wrapper>
      <NegativeIcon src={negative} />
      <Percentage>{percentage}%</Percentage>
      <Copy>negative</Copy>
    </Wrapper>
  );
}