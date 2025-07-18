import { styled } from 'styled-components';

export default function SideMenu() {
  return (
    <Nav aria-label="Professional page side menu">
      <NavLink href="#Whoiam">Who Am I</NavLink>
      <NavLink href="#Portfolio">Portfolio</NavLink>
      <NavLink href="#Experience">Experience</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 34px;

  height: 64px;
  width: 450px;
  margin: 0 auto;
  padding: 0 34px;
`;

const NavLink = styled.a`
  text-decoration: none;
  flex: 1;
  text-align: center;
  color: var(--color-primary);
`;
