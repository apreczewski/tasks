import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  className?: string;
  placeholder?: string;
  width?: string;
  hasValidation?: boolean;
}

export const InputTextArea: React.FC<InputProps> = ({ id, name, className, width, placeholder }) => {

  const textAreaRef = useRef(null);

  const { fieldName, registerField, defaultValue,
    // error
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return (
    <Content className={className} width={width} >
      <textarea
        ref={textAreaRef}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
      <span />
    </Content >
  );
}
