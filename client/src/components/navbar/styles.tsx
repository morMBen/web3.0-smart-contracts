import styled from 'styled-components';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 15px;
  color: #f1f1f1;
  background-color: #333333;
`;
export const LogoContainer = styled.div`
  @media (min-width: 768px) {
    flex: 0 1 auto;
  }
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 32%;
  cursor: pointer;
  margin-left: 15px;
`;
export const Menu = styled.ul`
  background-color: grey;
  list-style-type: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  flex: 0 1 auto;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MenuItem = styled.li`
  margin: 0 1em;
  cursor: pointer;
  &:hover {
    color: #d5a130;
  }
`;
export const LoginMenuItem = styled.li`
  padding: 1.5% 4%;
  margin: 0 2em 0 1em;
  border-radius: 6px;
  background-color: #d5a130;
  color: #424242;
  cursor: pointer;
  &:hover {
    color: #333333;
    background-color: #fdc03c;
  }
`;

export const ClosedMenuIcon = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 28px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const OpenMenuIcon = styled(HiMenuAlt4)`
  cursor: pointer;
  font-size: 28px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuMobile = styled.ul`
  z-index: 10;
  position: fixed;
  right: 0;
  top: 0;
  width: 70vw;
  height: 100vh;
  background-color: #0000007a;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 4.5em 3em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const MenuItemMobile = styled.li`
  list-style-type: none;
  margin: 7px;
  font-weight: bold;
  font-size: 24px;
`;
export const ClosedMenuIconMobile = styled(AiOutlineClose)`
  font-size: 28px;
  position: absolute;
  top: 0.7em;
  left: 0.7em;
`;
