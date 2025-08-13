import { styled } from 'styled-components';
import PortFolio from './PortFolio/PortFolio';
import Experience from './Experience/Experience';
import Menu from './Menu';

import { useState, useEffect } from 'react';

export default function ProfessionalContent() {
  const [menuState, setMenuState] = useState('experience');
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMenuChange = (newState: string) => {
    if (newState !== menuState && !isTransitioning) {
      setIsTransitioning(true);
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (!isVisible && isTransitioning) {
      const timer = setTimeout(() => {
        setMenuState(prevState => prevState === 'experience' ? 'portfolio' : 'experience');
        setIsVisible(true);
        setIsTransitioning(false);
      }, 200); 
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, isTransitioning]);

  const Content = menuState === 'experience' ? <Experience /> : <PortFolio />;

  return (
    <Wrapper>
      <Menu menuState={menuState} setMenuState={handleMenuChange}/>
      <ContentWrapper $isVisible={isVisible}>
        {Content}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 64px;
`;

const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 104px;
  opacity: ${props => props.$isVisible ? 1 : 0};
  
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s ease-in-out;
  }
`;

