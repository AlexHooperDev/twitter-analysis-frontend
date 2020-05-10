import React from 'react';
import { Arrow, Year, Wrapper } from './styled';
import arrow from '../../assets/arrow.svg';

export const YearSelector = ({ year, changeYear }) => (
  <Wrapper>
    <Arrow src={arrow} prev onClick={() => changeYear('prev')} />
    <Year>{year}</Year>
    <Arrow src={arrow} onClick={() => changeYear('next')} />
  </Wrapper>
);
