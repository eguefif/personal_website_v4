import { styled } from 'styled-components';
import NavLink from './NavLink';

interface MenuProps {
  menuState: string;
  setMenuState: (newState: string) => void; 
}

export default function Menu({menuState, setMenuState} : MenuProps) {
   return (
   <Wrapper>
      <NavLink 
        active={menuState === 'experience'} 
        label='Experience' 
        onClick={menuState !== 'experience' ? () => setMenuState('experience') : undefined }
      />
      <NavLink 
        active={menuState === 'portfolio'} 
        label='Portfolio' 
        onClick={menuState !== 'portfolio' ? () => setMenuState('portfolio') : undefined }
      />
   </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
