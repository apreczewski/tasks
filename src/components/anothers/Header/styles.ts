import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;

  > section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > svg {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.5rem;
      background: ${colors.lavender};
      border-radius: 50%;
      margin-right: 1.25rem;
    }

    > h1 {
      font-size: 1.625rem;
    }
  }
`;
