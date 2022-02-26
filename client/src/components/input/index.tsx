import React from 'react';
import * as Style from './style';

const Input: React.FC<Style.InputProps> = ({
  placeholder,
  name,
  value,
  type,
  onChange,
}) => {
  return (
    <Style.Input
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    ></Style.Input>
  );
};

export default Input;
