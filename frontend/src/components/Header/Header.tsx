import { styled } from 'styled-components';

import NavLink from './NavLink';

export default function Header() {
  return (
    <Nav aria-label="Website main menu">
      <NavLink link="/" label="Professional" />
      <NavLink link="/" label="Blog" />
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  height: 128px;
  width: 700px;
  margin: auto;
  padding: 34px;
`;
