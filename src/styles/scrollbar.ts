import { css } from 'styled-components';
import { colors } from './colors';
import { shade } from 'polished';

export const scrollbar = css`
  &::-webkit-scrollbar-track {
    background: ${colors.athensGray};
    box-shadow: inset 0 0 6px ${shade(0.3, colors.shark)};
    -webkit-box-shadow: inset 0 0 6px ${shade(0.3, colors.shark)};
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${shade(0.3, colors.shark)};
  }

  scrollbar-color: ${shade(0.25, colors.shark)} ${shade(0.15, colors.shark)};
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;

export const scrollbarThin = css`
  &::-webkit-scrollbar-track {
    background: ${colors.athensGray};
    border-radius: 9px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${shade(0.3, colors.lavender)};
    border-radius: 9px;
  }

  scrollbar-color: ${shade(0.25, colors.shark)} ${shade(0.15, colors.shark)};
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;

export const scrollbarHover = css`
  &::-webkit-scrollbar-track {
    visibility: hidden;
    box-shadow: inset 0 0 6px ${shade(0.3, colors.shark)};
    -webkit-box-shadow: inset 0 0 6px ${shade(0.3, colors.shark)};
    background-color: ${colors.athensGray};
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: ${colors.athensGray};
  }

  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }

    &::-webkit-scrollbar-track {
      visibility: visible;
    }
    scrollbar-color: ${shade(0.3, colors.shark)} ${shade(0.3, colors.shark)};
  }
`;
