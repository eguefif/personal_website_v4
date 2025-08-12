import { styled } from 'styled-components';
import { QUERIES } from 'components/constants';

export default function SideMenu() {
  return (
    <Nav aria-label="Professional page side menu">
      <NavLink className="whoiam" href="#Whoiam">
        Who Am I
        <UnderLine />
      </NavLink>
      <NavLink className="portfolio" href="#Portfolio">
        Portfolio
        <UnderLine />
      </NavLink>
      <NavLink className="experience" href="#Experience">
        Experience
        <UnderLine />
      </NavLink>
    </Nav>
  );
}

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

const Nav = styled.nav`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
  }

  margin: 0 auto;
  padding: 0 34px;
  position: relative;
  
`;

const NavLink = styled.a`
  text-decoration: none;
  text-align: center;
  color: var(--color-white);
  position: relative;

  &:hover ${UnderLine} {
    transition: opacity 0.2s ease;
    opacity: 1;
  }
`;

