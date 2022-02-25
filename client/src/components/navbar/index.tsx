import { useState } from 'react';

import {
  Container,
  LogoContainer,
  Logo,
  Menu,
  MenuItem,
  LoginMenuItem,
  ClosedMenuIcon,
  OpenMenuIcon,
  MenuMobile,
  MenuItemMobile,
  ClosedMenuIconMobile,
} from './styles';

import logo from '../../assets/images/cr.png';

interface NavbarItemProps {
  title: string;
  isMobile: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, isMobile }) => {
  if (isMobile) {
    return <MenuItemMobile>{title}</MenuItemMobile>;
  }
  return <MenuItem>{title}</MenuItem>;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo src={logo} alt='crypty logo' />
        </LogoContainer>
        <Menu>
          {['Market', 'Exchange', 'Wakkets'].map(
            (item: string, index: number) => {
              return (
                <NavbarItem isMobile={false} key={item + index} title={item} />
              );
            }
          )}
          <LoginMenuItem>Login</LoginMenuItem>
        </Menu>
        <div style={{ display: 'flex', position: 'relative' }}>
          {isMenuOpen ? (
            <ClosedMenuIcon onClick={() => setIsMenuOpen((prev) => !prev)} />
          ) : (
            <OpenMenuIcon onClick={() => setIsMenuOpen((prev) => !prev)} />
          )}
          {isMenuOpen && (
            <MenuMobile>
              <ClosedMenuIconMobile onClick={() => setIsMenuOpen(false)} />

              {['Market', 'Exchange', 'Wakkets'].map(
                (item: string, index: number) => {
                  return (
                    <NavbarItem
                      isMobile={true}
                      key={item + index}
                      title={item}
                    />
                  );
                }
              )}
            </MenuMobile>
          )}
        </div>
      </Container>
    </>
  );
};

export default Navbar;
