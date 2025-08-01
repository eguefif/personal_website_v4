import ProfessionalContent from './ProfessionalContent/ProfessionalContent';
import SideBar from './SideBar/SideBar';

import { styled } from 'styled-components';

export default function ProfessionalPage() {
  return (
    <Wrapper>
      <SideBar />
      <ProfessionalContent />
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 264px;
`;
