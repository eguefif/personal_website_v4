import { styled } from 'styled-components';

export default function Header() {
  return (
    <Nav aria-label="Website main menu">
      <NavLink href="/sale">Professional page</NavLink>
      <NavLink href="/sale">Blog</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 34px;

  height: 128px;
  width: 450px;
  margin: auto;
  padding: 34px
`;

const NavLink = styled.a`
  text-decoration: none;
  flex: 1;
  text-align: center;
  color: var(--color-primary);
`;
