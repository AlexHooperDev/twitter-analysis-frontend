import React from 'react';
import { Title } from '../../components/Title';
import { Wrapper } from './styled';
import { Words } from '../../components/Words';

export const MostUsedWords = ({ words }) => {
  return (
    <Wrapper>
      <Title copy="Most Used Words" />
      <Words words={words} />
    </Wrapper>
  );
}
