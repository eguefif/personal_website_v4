import Header from './Header/Header';
import ProfessionalContent from './ProfessionalContent/ProfessionalContent';
import SideMenu from './SideMenu/SideMenu';

import { styled } from 'styled-components';

export default function ProfessionalPage() {
  return (
    <div>
      <Header />
      <Wrapper>
        <SideMenuWrapper>
          <SideMenu />
        </SideMenuWrapper>
        <ProfessionalContentWrapper>
          <ProfessionalContent />
        </ProfessionalContentWrapper>
      </Wrapper>
    </div>
  );
}


const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;

const SideMenuWrapper = styled.div`
  position: sticky;
  top: 0;
  flex: 1;
`;

const ProfessionalContentWrapper = styled.div`
  flex: 4;
`;
