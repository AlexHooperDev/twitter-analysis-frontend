import React, { useState } from 'react';
import { Wrapper, Copy, Hash, Text, Count, Button } from './styled';
import { DataError } from '../../components/DataError/styled';
import { Title } from '../../components/Title';
import { HashtagList } from '../../components/HashtagList';

export const MostHashtags = ({ hashtags }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper>
      <Title copy='Most Used Hashtags' />
      {hashtags.length === 0 ? (
        <DataError>No Hashtags found!</DataError>
      ) : (
        <>
          <Copy
            href={`https://twitter.com/search?q=%23${hashtags[0].hashtag.replace(
              /[#]+/g,
              ''
            )}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <Hash>#</Hash>
            <Text>{hashtags[0].hashtag.replace(/[#]+/g, '')}</Text>
            <Count>{hashtags[0].count} times</Count>
          </Copy>
          <HashtagList expanded={expanded} hashtags={hashtags} />
          <Button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'See less' : 'See more'}
          </Button>
        </>
      )}
    </Wrapper>
  );
};
