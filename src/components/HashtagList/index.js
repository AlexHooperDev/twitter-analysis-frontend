import React from "react";
import { Wrapper } from "./styled";
import { HashtagSmall } from "../HashtagSmall";

export const HashtagList = ({ hashtags, mentions }) => {
  return (
    <Wrapper>
      {hashtags.map((tag, i) => {
        if (i === 0) return;
        return <HashtagSmall tag={tag} mentions={mentions || false} />;
      })}
    </Wrapper>
  );
};
