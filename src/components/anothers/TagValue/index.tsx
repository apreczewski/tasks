import React from 'react';

import { FaCog, FaTimes } from 'react-icons/fa';

export interface ValueProps {
  id: string,
  value: string,
  description?: string,
  usersIds?: string[],
  dividedValue?: string,
}

import { Wrapper, Info, AnchorValue, Description, Value, Close } from './styles';

interface TagProps {
  valueCurrent: ValueProps,
  width?: string,
  height?: string,
  padding?: string,
  handleRemove(): void
}

export const TagValue: React.FC<TagProps> = ({ valueCurrent, width, height, padding, handleRemove }) => {
  const { value, description } = valueCurrent;

  return (
    <Wrapper width={width} height={height} padding={padding}>
      <Info height={height}>
        <FaCog size={12} />
      </Info>
      <AnchorValue>
        <Description>{description}</Description>
      </AnchorValue>
      <Close height={height} onClick={handleRemove}>
        <FaTimes size={12} />
      </Close>
    </Wrapper>
  );
};
