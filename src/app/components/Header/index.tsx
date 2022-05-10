import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IHeaderProps } from './types';


const HeaderContainer = styled.header`
  width: 100%;
  z-index: 1;
  background-color: #e0f2fd;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 5px 0px #000;
`;

const HeaderNav = styled.nav`
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLi = styled.li`
`;

const Header = (props: IHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <NavUl>
          <NavLi>
            <Link to="/">Home</Link>
          </NavLi>
          <NavLi>
            <Link to="/issue/I_kwDOAJy2Ks5IpfC4">Issue Detail (OPEN)</Link>
          </NavLi>
          <NavLi>
            <Link to="/issue/I_kwDOAJy2Ks5H8gfS">Issue Detail (CLOSED)</Link>
          </NavLi>
          <NavLi>
            <Link to="/random">Not Found</Link>
          </NavLi>
        </NavUl>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
