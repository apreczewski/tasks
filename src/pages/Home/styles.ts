import { shade } from 'polished';
import styled from 'styled-components';
import { Form } from '@unform/web'
import { colors } from '../../styles/colors';
import { scrollbarThin } from '../../styles/scrollbar';

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
`;

export const Body = styled.div`
  height: calc(100vh - 10.25rem);
  padding: 0 5px 0 0;

  overflow-y: auto;
  ${scrollbarThin}
`;

export const Anchor = styled.div`
  margin-top: 4rem;
`;

export const NoTask = styled.span`
  color: ${colors.lavender};
  font-size: 31.47px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 4rem 0;

  > button {
    & + button {
      margin-left: 1.25rem;
    }
  }

  #btn_todo {
    background: ${colors.boulder};
    &:hover {
      background: ${shade(0.2, `${colors.boulder}`)};
    }
  }

  #btn_closed {
    border: 1px solid ${colors.boulder};
    &:hover {
      background: ${shade(0.2, `${colors.shark}`)};
    }
  }
`;

export const ContentModal = styled.div`
  position: relative;
  width: 35rem;
  height: fit-content;
  background: ${colors.charade0};
  border-radius: 20px;
  padding: 60px 48px;

  > span {
    font-size: 31.47px;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    margin: 0 15px;
  }

  @media (max-width: 1600px) {
    padding: 30px 24px;
  }
`;


export const FormCustom = styled(Form)`
  margin-top: 44px;

  #textArea{
    margin: 20px 0;
  }
`;

export const BntClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  top: 21px;
  right: 21px;

  border-radius: 50%;

  border: none;
  text-decoration: none;

  background: ${colors.charade0};
  color: ${colors.athensGray};
  cursor: pointer;

  transition: background, color 0.5s;

  &:hover {
    background: ${shade(0.2, colors.charade0)};
    color: ${colors.redRibbon};
  }
`;
