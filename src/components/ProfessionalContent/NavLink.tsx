import { styled } from 'styled-components';

interface NavLinkProps {
  label: string;
  active: boolean;
  onClick?: () => void;
}

export default function NavLink({label, active, onClick} : NavLinkProps) {
  const weight = active ? '400px' : '700px';
  const fontSize = active ? '1.7rem' : '1.5rem';

  return (
    <Wrapper>
      <StyledLink 
        style={{ '--weight': weight, '--font-size': fontSize }} 
        onClick={onClick}
      >
        { label }
      </StyledLink>
      <UnderLine />
    </Wrapper>
  );
}


const UnderLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-white);
  position: absolute;
  top: -8px;
  left: 0;
  opacity: 0;
  
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.3s;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: var(--font-size);
  font-weight: var(--weight);
  
  @media (prefers-reduced-motion: no-preference) {
    transition: font-size 0.3s ease-in-out, font-weight 0.3s ease-in-out, transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;

  &:hover ${UnderLine} {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

