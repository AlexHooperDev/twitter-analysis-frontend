import React from "react";

import { Wrapper, Copy, Hash, Text, Count } from "./styled";
import { Title } from "../../components/Title";
import { HashtagList } from "../../components/HashtagList";

export const MostHashtags = ({ hashtags }) => {
  return (
    <Wrapper>
      <Title copy="Most used hashtags" />
      <Copy>
        <Hash>#</Hash>
        <Text>{hashtags[0].hashtag.replace(/[#]+/g, "")}</Text>
        <Count>{hashtags[0].count} times</Count>
      </Copy>
      <HashtagList hashtags={hashtags} />
    </Wrapper>
  );
};
