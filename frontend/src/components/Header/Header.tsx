import { styled } from 'styled-components';

export default function Header() {
  const isHomePage = window.location.pathname === '/';

  return (
    <Nav aria-label="Website main menu">
      <NavLink href="/" className={isHomePage ? 'active' : ''}>
        Professional page
        <UnderLine />
      </NavLink>
      <NavLink href="/">
        Blog
        <UnderLine />
      </NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  height: 128px;
  width: 450px;
  margin: auto;
  padding: 34px;
`;

const UnderLine = styled.div`
  position: absolute;
  background-color: var(--color-white);
  height: 2px;
  width: 100%;
  bottom: -8px;
  left: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const NavLink = styled.a`
  display: inline;
  text-decoration: none;
  flex: 1;
  text-align: center;
  color: var(--color-white);
  position: relative;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  transform: scale(1);
  transition: transform 0.3s ease, font-weight 0.3s ease;

  &.active {
    font-weight: 700;
    transform: scale(1.1);
  }

  &:hover ${UnderLine} {
    transition: opacity 0.2s ease;
    opacity: 1;
  }
`;
