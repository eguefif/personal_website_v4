import { keyframes, styled } from 'styled-components';
import { useState, useEffect } from 'react';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import MainLayout from 'components/MainLayout';
import Introduction from 'components/Introduction/Introduction';

function App() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <Wrapper>
        {!prefersReducedMotion && (
          <IntroductionContainer>
            <Introduction />
          </IntroductionContainer>
        )}
        <MainLayoutContainer $skipIntro={prefersReducedMotion}>
          <MainLayout />
        </MainLayoutContainer>
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
`;

const IntroAnimation = keyframes`
  0% {
    transform: translateY(15%);
    opacity: 0
  }
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  85% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20%);
  }
`;

const IntroductionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: ${IntroAnimation} 4500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`;

const MainLayoutAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MainLayoutContainer = styled.div<{ $skipIntro: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 84px;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: ${MainLayoutAnimation} 1000ms both;
    animation-delay: ${props => props.$skipIntro ? '0ms' : '4000ms'};
  }
  
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
  }
`;

export default App
