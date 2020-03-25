import React from "react";

import { Wrapper, Copy, Hash, Text, Count } from "./styled";
import { Title } from "../../components/Title";
import { HashtagList } from "../../components/HashtagList";

export const MostMentions = ({ mentions }) => {
  return (
    <Wrapper>
      <Title copy="Most mentioned users" />
      <Copy>
        <Hash>@</Hash>
        <Text>{mentions[0].user.replace(/[@]+/g, "")}</Text>
        <Count>{mentions[0].count} times</Count>
      </Copy>
      <HashtagList hashtags={mentions} mentions />
    </Wrapper>
  );
};
