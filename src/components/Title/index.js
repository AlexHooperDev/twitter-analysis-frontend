import React from 'react';

import { TitleStyle } from './styled';

export const Title = ({ copy }) => {
  return (
    <TitleStyle>{copy}</TitleStyle>
  );
};