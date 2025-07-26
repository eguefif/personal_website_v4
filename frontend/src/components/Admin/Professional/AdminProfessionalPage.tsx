import { styled } from 'styled-components';
import { Code, Info, Briefcase } from 'react-feather';
import { Link, Outlet, useLocation } from 'react-router';

import NavIconButton from 'components/Commons/Buttons/NavIconButton'
import { H1 } from 'components/Commons/Titles'


export default function AdminProfessionalPage() {
  const location = useLocation();
  if (location.pathname === '/admin/professional') {
  return (
    <Wrapper>
      <Nav>
        <StyledLink to="personal">
          <NavIconButton label="Edit Personal"><Info size={60}/></NavIconButton>
        </StyledLink>
        <StyledLink to="portfolio">
          <NavIconButton label="Edit Portfolio"><Code size={60}/></NavIconButton>
        </StyledLink>
        <StyledLink to="experience">
          <NavIconButton label="Edit Experience"><Briefcase size={60}/></NavIconButton>
        </StyledLink>
      </Nav>
    </Wrapper>
  );
  } else {
    return (
      <Outlet />
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Nav = styled.div`
  display: flex;
  gap: 128px;
  width: 100%;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  
  &:visited {
    color: inherit;
  }
`
