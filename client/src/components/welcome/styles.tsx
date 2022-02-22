import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 3rem 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-right: 2.5rem;
  }
`;

export const LargeHeading = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: white;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.75rem 0;
  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`;

export const Paragraph = styled.p`
  text-align: left;
  margin: 1.25rem 0;
  color: white;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  width: 91%;
  @media (min-width: 768px) {
    width: 75%;
  }
`;
export const Paragraph2 = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const ConnectButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #2952e3;
  padding: 0.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: white;
  &:hover {
    background: #2546bd;
  }
`;
