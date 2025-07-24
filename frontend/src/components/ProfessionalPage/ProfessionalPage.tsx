import Header from './Header/Header';
import ProfessionalContent from './ProfessionalContent/ProfessionalContent';
import SideMenu from './SideBar/SideMenu';
import Whoami from './SideBar/Whoami';

import { styled } from 'styled-components';

export default function ProfessionalPage() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <SideBarWrapper>
          <Whoami />
          <SideMenu />
        </SideBarWrapper>
        <ProfessionalContentWrapper>
          <ProfessionalContent />
        </ProfessionalContentWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 84px;
`;


const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 184px;
`;

const SideBarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 84px;
`;

const ProfessionalContentWrapper = styled.div`
`;
