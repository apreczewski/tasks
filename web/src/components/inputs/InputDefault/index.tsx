import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// import ValidationFB from '../ValidationFB';

import { Wrapper } from './styles';

interface IInput {
  name: string;
  className?: string;
  placeholder?: string;
  width?: string;
  hasValidation?: boolean;
}

export const InputDefault: React.FC<IInput> = ({
  name,
  className,
  placeholder,
  width,
  hasValidation,
}) => {

  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue,
    // error
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Wrapper
      // error={error}
      className={className}
      width={width}
    >
      <input
        ref={inputRef}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />

      {/* {hasValidation && <ValidationFB error={error} />} */}
    </Wrapper>
  );
}
