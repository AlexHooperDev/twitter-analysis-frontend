import React from 'react';

import { Form, Input, Button, At } from './styled';

export const InputForm = ({ handleSubmit, username, setUsername }) => {
  return (
    <Form onSubmit={(e) => handleSubmit(e, username)}>
      <At>@</At>
      <Input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
      <Button>ANALYSE</Button>
    </Form>
  )
}