import React from 'react';
import { Wrapper } from './styled';
import { HashtagSmall } from '../HashtagSmall';

export const HashtagList = ({ hashtags, mentions, expanded }) => (
  <Wrapper expanded={expanded}>
    {hashtags.map((tag, i) => {
      if (i === 0) return;
      return <HashtagSmall tag={tag} mentions={mentions || false} />;
    })}
  </Wrapper>
);
