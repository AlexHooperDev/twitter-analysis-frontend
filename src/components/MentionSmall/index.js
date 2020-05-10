import React from 'react';
import { Wrapper, WordSpan, CountSpan } from './styled';

export const MentionSmall = ({ mention }) => (
  <Wrapper
    href={`https://twitter.com/${mention.user.replace(/[@]+/g, '')}`}
    target='_blank'
  >
    <WordSpan>{mention.user}</WordSpan>
    <CountSpan>{mention.count} times</CountSpan>
  </Wrapper>
);
