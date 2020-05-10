import React, { useState } from 'react';

import { Wrapper, Copy, Hash, Text, Count, Button } from './styled';
import { DataError } from '../../components/DataError/styled';
import { Title } from '../../components/Title';
import { MentionsList } from '../../components/MentionsList';

export const MostMentions = ({ mentions }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper>
      <Title copy='Most Mentioned Users' />
      {mentions.length === 0 ? (
        <DataError>No mentions found!</DataError>
      ) : (
        <>
          <Copy
            href={`https://twitter.com/${mentions[0].user.replace(
              /[@]+/g,
              ''
            )}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <Hash>@</Hash>
            <Text>{mentions[0].user.replace(/[@]+/g, '')}</Text>
            <Count>{mentions[0].count} times</Count>
          </Copy>
          <MentionsList expanded={expanded} mentions={mentions} />
          <Button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'See less' : 'See more'}
          </Button>
        </>
      )}
    </Wrapper>
  );
};
