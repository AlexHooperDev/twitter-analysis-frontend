import React from 'react';
import { Wrapper, WordSpan, CountSpan } from './styled';

export const Word = ({ word }) => {
  return (
    <Wrapper>
      <WordSpan>{word.word}</WordSpan>
      <CountSpan>{word.count} times</CountSpan>
    </Wrapper>
  );
}