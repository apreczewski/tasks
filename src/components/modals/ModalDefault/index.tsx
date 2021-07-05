import React, {} from 'react';

import { Wrapper } from './styles';

interface ModalProps {
  isOpen: boolean,
  handleClose(): void,
}

export const ModalDefault: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleClose,
}) => {

  return (
    <Wrapper
      isOpen={isOpen}
      overlayClassName="modal-default"
      onRequestClose={handleClose}
      shouldCloseOnEsc
      ariaHideApp={false}
    >
      {children}
    </Wrapper>
  );
}
