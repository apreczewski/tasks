import React from 'react';

import { AiOutlineBars } from 'react-icons/ai';
import { Wrapper } from './styles';

import { ButtonDefault } from '../../../components/buttons/ButtonDefault';

interface IHeader {
  openModal(): void;
}

export const Header: React.FC<IHeader> = ({ openModal }) => {
  return (
    <Wrapper>
      <section>
        <AiOutlineBars size={20} />
        <h1>tasks</h1>
      </section>
      <ButtonDefault type="button" onClick={openModal}>
        <span>New Task</span>
      </ButtonDefault>
    </Wrapper>
  );
}

