import React from 'react';

import Logo from '../../assets/twitter.svg';

import { HeaderWrapper, TwitterLogo, Text } from './styled';
import { InputForm } from '../../components/InputForm';

export const Header = ({ handleSubmit, username, setUsername, loading, error }) => {
  return (
    <HeaderWrapper>
      <TwitterLogo src={Logo} />
      <Text>Twitter User Analysis</Text>
      <InputForm
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        loading={loading}
        error={error}
      />
    </HeaderWrapper>
  );
};