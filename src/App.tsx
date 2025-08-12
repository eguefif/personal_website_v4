import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import MainLayout from 'components/MainLayout';
import Introduction from 'components/Introduction/Introduction';

function App() {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMainLayout, setShowMainLayout] = useState(false);
  const [mainLayoutVisible, setMainLayoutVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setShowMainLayout(true);
      
      setTimeout(() => {
        setMainLayoutVisible(true);
      }, 50);
      
      setTimeout(() => {
        setShowIntroduction(false);
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <AnimationContainer>
        {showIntroduction && (
          <IntroductionContainer $isAnimating={isAnimating}>
            <Introduction />
          </IntroductionContainer>
        )}
        {showMainLayout && (
          <MainLayoutContainer $visible={mainLayoutVisible}>
            <MainLayout />
            <Footer />
          </MainLayoutContainer>
        )}
      </AnimationContainer>
      <GlobalStyles />
    </Wrapper>
  )
}

const Footer = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
`;

const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const IntroductionContainer = styled.div<{ $isAnimating: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${props => props.$isAnimating ? 'translateY(-100%)' : 'translateY(0)'};
`;

const MainLayoutContainer = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 84px;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  
  ${props => props.$visible && `
    opacity: 1;
  `}
`;

export default App

