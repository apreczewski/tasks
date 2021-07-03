import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 3.125rem;

  border-top: 1px solid ${colors.gunPowder};

  > span {
    text-align: center;

  }
`;
