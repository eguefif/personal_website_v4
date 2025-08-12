import { styled } from 'styled-components';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import ProfessionalPage from 'components/ProfessionalPage';


function App() {
  return (
    <Wrapper>
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

