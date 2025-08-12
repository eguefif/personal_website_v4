import { styled } from 'styled-components';
import PortFolio from './PortFolio/PortFolio';
import Experience from './Experience/Experience';
import type { User } from '../useFetchUser';

export default function ProfessionalContent({ user }: { user: User | null }) {
  return (
    <Wrapper>
      <Experience />
      <PortFolio />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 104px;
`;

