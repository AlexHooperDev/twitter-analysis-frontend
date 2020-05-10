import React from 'react';
import { Wrapper, WordSpan, CountSpan } from './styled';

export const HashtagSmall = ({ tag, mentions }) => (
  <Wrapper
    href={`https://twitter.com/search?q=%23${tag.hashtag.replace(/[#]+/g, '')}`}
    target='_blank'
  >
    <WordSpan>{mentions ? tag.user : tag.hashtag}</WordSpan>
    <CountSpan>{tag.count} times</CountSpan>
  </Wrapper>
);
