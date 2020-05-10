import React from 'react';
import { Wrapper } from './styled';
import { MentionSmall } from '../MentionSmall';

export const MentionsList = ({ mentions, expanded }) => (
  <Wrapper expanded={expanded}>
    {mentions.map((m, i) => {
      if (i === 0) return;
      return <MentionSmall mention={m} />;
    })}
  </Wrapper>
);
