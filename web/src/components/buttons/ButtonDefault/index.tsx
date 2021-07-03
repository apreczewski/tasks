import React, { ButtonHTMLAttributes } from 'react';

import { ButtonCuston } from './styles';

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  width?: string;
  radius?: number | undefined;
};

export const ButtonDefault: React.FC<ButtonPros> = ({ children, ...rest }) => {
  return <ButtonCuston type='button' {...rest}>{children}</ButtonCuston>
};
