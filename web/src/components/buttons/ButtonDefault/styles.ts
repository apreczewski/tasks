import styled from 'styled-components';
import { shade } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import { colors } from '../../../styles/colors';

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  width?: string;
  radius?: number | undefined;
};

export const ButtonCuston = styled.button<ButtonPros>`
  background: ${p => p?.color ? p.color : colors.lavender};
  /* width: 195px; */
  width: ${p => p?.width ? p?.width : '195px'};
  height: 48px;
  border-radius: ${p => p.radius !== undefined ? `${p.radius}px` : "25px"};
  color: ${colors.athensGray};
  padding: 0 16px;
  font-weight: 500;



  text-decoration: none;
  border: none;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, `${colors.lavender}`)};
  }
`;
