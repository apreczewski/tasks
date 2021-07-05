import React from 'react';

import { BiErrorAlt } from 'react-icons/bi'

import { Wrapper, LinkGoBack } from './styles';

export const Error404: React.FC = () => {
  return (
    <Wrapper>
      <BiErrorAlt size={200} />
      <LinkGoBack to="/">Go back to home</LinkGoBack>
    </Wrapper>
  );
}
