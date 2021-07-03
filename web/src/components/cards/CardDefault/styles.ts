import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
  background: ${colors.charade};
  width: 100%;
  height: 17.25rem;

  border-radius: 1.25rem;

  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.375rem;
  padding: 1.25rem;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;

  background: ${colors.charade0};

  svg {
    display: flex;
    justify-self: center;
    align-self: center;

    color: ${colors.lavender};
    border-radius: 50%;
    width: 1.875rem;
    height: 1.875rem;
    padding: 0.188rem;

    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${shade(0.2, colors.charade)};
    }

  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 1.25rem;
    }
  }
`;

export const Body = styled.div`
  height: 9.188rem;
  padding: 1.25rem;
  line-height: 1.625rem;
  font-weight: 400;
  font-style: normal;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.688rem;
  padding: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;

  background: ${colors.charade0};
  font-weight: 300;
  font-style: normal;
`;
