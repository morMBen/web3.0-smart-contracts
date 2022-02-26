import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
`;

export const Animate = styled.div`
  border-radius: 9999px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  height: 8rem;
  width: 8rem;
  border-width: 0 0 0 2px;
  border-color: #c53030;
  border-style: solid;
`;
