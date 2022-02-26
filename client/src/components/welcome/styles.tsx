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
  padding: 1.5rem 0.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem;
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
  background-clip: text;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 100%;
  margin: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export type GridItemProps = {
  theme: any;
  radiusBL?: number;
  radiusUR?: number;
  radiusBR?: number;
  radiusUL?: number;
};

export const GridItem = styled.div<GridItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid grey;
  min-height: 70px;
  padding: 0;
  color: white;
  @media (min-width: 768px) {
    border-radius: ${(props) => props.radiusUL || 0}px
      ${(props) => props.radiusUR || 0}px ${(props) => props.radiusBR || 0}px
      ${(props) => props.radiusBL || 0}px;
  }
  @media (min-width: 640px) {
    min-width: 120px;
    padding: 0 2rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2.5rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
export const CardBackground = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  margin: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: #a099ff;
  background-image: radial-gradient(
      at 83% 67%,
      rgb(152, 231, 156) 0,
      transparent 58%
    ),
    radial-gradient(at 67% 20%, hsla(357, 94%, 71%, 1) 0, transparent 59%),
    radial-gradient(at 88% 35%, hsla(222, 81%, 65%, 1) 0, transparent 50%),
    radial-gradient(at 31% 91%, hsla(9, 61%, 61%, 1) 0, transparent 52%),
    radial-gradient(at 27% 71%, hsla(336, 91%, 65%, 1) 0, transparent 49%),
    radial-gradient(at 74% 89%, hsla(30, 98%, 65%, 1) 0, transparent 51%),
    radial-gradient(at 53% 75%, hsla(174, 94%, 68%, 1) 0, transparent 45%);
  @media (min-width: 640px) {
    width: 18rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50px;
        border: white solid 2px;
      }
    }
    main {
      & p:nth-child(1) {
        color: white;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      & p:nth-child(2) {
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-top: 0.75rem;
      }
    }
  }
`;

export const WelcomeForm = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: rgba(11, 11, 12, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(74, 126, 255, 0.01);
  @media (min-width: 640px) {
    width: 24rem;
  }
`;

export const SendButton = styled.button`
  color: white;
  width: 100%;
  margin: 0.5rem 0;
  border: 1px solid #3d4f7c;
  padding: 0.5rem;
  background: transparent;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;
