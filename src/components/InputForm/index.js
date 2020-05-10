import React from 'react';
import { css } from '@emotion/core';

import { SyncLoader } from 'react-spinners';

import {
  Form, Input, Button, At, FormError,
} from './styled';

export const InputForm = ({
  handleSubmit, username, setUsername, loading, error,
}) => (
  <>
    <Form onSubmit={(e) => handleSubmit(e, username)}>
      <At>@</At>
      <Input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button error={error}>
        <SyncLoader
          size={6}
          margin={2}
          // size={"150px"} this also works
          color="#f7f7f7"
          loading={loading}
        />
        {!loading && 'ANALYSE'}
      </Button>
    </Form>
    {error && <FormError>Enter a valid username</FormError>}
  </>
);
