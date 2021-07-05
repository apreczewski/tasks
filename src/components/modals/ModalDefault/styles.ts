import styled from 'styled-components';
import Modal from 'react-modal';

export const Wrapper = styled(Modal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;

  background: rgba(44, 39, 56, 0.9);
`;
