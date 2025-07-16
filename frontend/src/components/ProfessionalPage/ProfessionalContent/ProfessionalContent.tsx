import { styled } from 'styled-components';
import Biopic from './Biopic';

export default function ProfessionalContent() {
  return (
    <Wrapper>
      <Biopic />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
