import React from 'react';
import { Wrapper } from './styled';
import { Word } from '../Word';

export const Words = ({ words }) => (
  <Wrapper>
    {words.map((word, i) => {
      if (i > 20) return;
      return <Word word={word} />;
    })}
  </Wrapper>
);
