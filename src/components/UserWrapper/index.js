import React, { useEffect, useState } from 'react';

import { Wrapper } from '../../styled';

export const UserWrapper = ({ children }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1);
  }, []);

  return (
    <Wrapper mounted={mounted}>{children}</Wrapper>
  );
}