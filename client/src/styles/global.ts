import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family:  'Montserrat', sans-serif;
    font-weight: 400;
}

#root {
    margin: 0 auto;
}

`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: grey;
  margin: 0.5rem 0;
`;
