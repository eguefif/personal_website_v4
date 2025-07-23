import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import ProfessionalPage from './components/ProfessionalPage/ProfessionalPage';
import { styled } from 'styled-components';

function App() {
  return (
    <>
      <ProfessionalPage />
      <GlobalStyles />
      <Footer />
    </>
  )
}

const Footer = styled.div`
  height: 100px;
`;

export default App
