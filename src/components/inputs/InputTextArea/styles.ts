import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface IContent {
  width?: string;
}


export const Content = styled.div<IContent>`
  position: relative;
  width: ${p => p.width ? p.width : '200px'};

  textarea {
    width: 100%;
    height: 14.6rem;
    font-size: 16px;

    border:0;
    background: ${colors.charade};
    color: ${colors.boulder};
    border-radius: 20px;
    padding: 16px 24px;
    resize: none;

    &:focus, &:valid{
      &~label {
        color: ${colors.boulder};
        transform: translateY(-20px);
        font-size:0.825em;
        cursor:default;
      }
    }

    &:focus{
      &~span{
        width: 100%;
      }
    }
  }


  span{
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    left:0;
    width: 0;
    height: 2px;
    color: ${colors.redRibbon};
    transition: all 200ms ease-out;
  }
`;
