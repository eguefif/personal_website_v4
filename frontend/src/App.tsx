import { styled } from 'styled-components';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import ProfessionalPage from 'components/ProfessionalPage/ProfessionalPage';
import Header from 'components/Header/Header';



function App() {
  return (
    <Wrapper>
      <Header />
      <ProfessionalPage />
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

