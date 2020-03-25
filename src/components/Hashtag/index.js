import React from "react";
import { Wrapper, PositiveIcon, Percentage, Copy } from "./styled";

import hashtag from "../../assets/hashtag.svg";

export const Hashtag = ({ count }) => {
  return (
    <Wrapper>
      <PositiveIcon src={hashtag} />
      <Percentage>{count} times</Percentage>
    </Wrapper>
  );
};
