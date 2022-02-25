import React from 'react';
import * as Style from './style';

const Input: React.FC<Style.InputProps> = ({
  placeholder,
  name,
  value,
  type,
  handleChange,
}) => {
  return (
    <Style.Input
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    ></Style.Input>
  );
};

export default Input;
