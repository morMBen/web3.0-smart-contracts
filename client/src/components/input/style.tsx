import styled from 'styled-components';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange?: () => void;
}

export const Input = styled.input<InputProps>``;
