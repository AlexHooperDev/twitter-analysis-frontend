import React from 'react';

import Logo from '../../assets/twitter.svg';

import { HeaderWrapper, TwitterLogo, Text, Copy, Link, Author } from './styled';
import { InputForm } from '../../components/InputForm';

export const Header = ({
  handleSubmit,
  username,
  setUsername,
  loading,
  error,
}) => (
  <HeaderWrapper>
    <Author>
      Built by{' '}
      <Link
        href='https://twitter.com/alexhooperdev'
        target='_blank'
        rel='noopener noreferrer'
      >
        Alex Hooper
      </Link>
    </Author>
    <TwitterLogo src={Logo} />
    <Text>Twitter User Analysis</Text>
    <Copy>
      Welcome! This is a tool that analyses a Twitter user’s timeline, using up
      to 3,200 publicly available tweets from the Twitter API. The tool does not
      store any data whatsoever. If you have any suggestions or feedback, I’d
      love to hear them, so please get in touch{' '}
      <Link
        href='https://twitter.com/alexhooperdev'
        target='_blank'
        rel='noopener noreferrer'
      >
        @alexhooperdev
      </Link>
      .
    </Copy>
    <InputForm
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      loading={loading}
      error={error}
    />
  </HeaderWrapper>
);
