import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../assets/images/cr.png';

interface NavbarItemProps {
  title: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title }) => {
  return <li style={{ cursor: 'pointer' }}>{title}</li>;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <img
        src={logo}
        alt='logo'
        style={{ width: '200px', cursor: 'pointer' }}
      />
      <ul
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {['Market', 'Exchange', 'Wakkets'].map(
          (item: string, index: number) => {
            return <NavbarItem key={item + index} title={item} />;
          }
        )}
        <li>Login</li>
      </ul>
      <div>
        {isMenuOpen ? (
          <AiOutlineClose onClick={() => setIsMenuOpen((prev) => !prev)} />
        ) : (
          <HiMenuAlt4 onClick={() => setIsMenuOpen((prev) => !prev)} />
        )}
        {/* {isMenuOpen && (
          <ul>
            <li></li>
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
