import { styled } from 'styled-components';
import { NavLink } from 'react-router';

export default function AdminHeader() {
  return (
    <Nav aria-label="Website main menu">
      <Link to="/admin/professional">Professional page</Link>
      <Link to="/admin/blog">Blog</Link>
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

const Link = styled(NavLink)`
  display: inline;
  text-decoration: none;
  flex: 1;
  text-align: center;
  color: var(--color-white);

  &:hover {
    font-size: 1.3rem;
  }

  &.active {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
