import { styled } from 'styled-components';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import MainLayout from 'components/MainLayout';


function App() {
  return (
    <Wrapper>
      <MainLayout />
      <Footer />
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
  gap: 84px;
`;

export default App

