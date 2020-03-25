import React from "react";
import { Wrapper, WordSpan, CountSpan } from "./styled";

export const HashtagSmall = ({ tag, mentions }) => {
  return (
    <Wrapper>
      <WordSpan>{mentions ? tag.user : tag.hashtag}</WordSpan>
      <CountSpan>{tag.count} times</CountSpan>
    </Wrapper>
  );
};
