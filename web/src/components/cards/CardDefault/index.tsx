import React from 'react';

import { BiCircle } from 'react-icons/bi'
import { GoKebabHorizontal } from 'react-icons/go'

import {
  Wrapper, Header, Body, Footer
} from './styles';

export interface ICard {
  id?: string;
  title: string,
  text: string,
  created: string
}

export const CardDefault: React.FC<ICard> = ({ title, text, created }) => {

  return (
    <Wrapper>
      <Header>
        <div>
          <BiCircle size={20} />
          <span>{title}</span>
        </div>
        <GoKebabHorizontal size={20} />
      </Header>
      <Body>
        <span>{text}</span>
      </Body>
      <Footer>
        <span>{created}</span>
      </Footer>
    </Wrapper >
  );
}
