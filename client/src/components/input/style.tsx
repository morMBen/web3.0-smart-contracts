import styled from 'styled-components';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  onChange: () => void;
}

export const Input = styled.input<InputProps>`
  color: white;
  margin: 0.5rem;
  width: 100%;
  border-radius: 0.125rem;
  padding: 0.5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: transparent;
  border: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background: #ffffff18;
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
`;
