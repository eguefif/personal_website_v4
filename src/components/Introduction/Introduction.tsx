import { styled } from 'styled-components';
import PersonalInfo from 'components/Commons/PersonalInfo';

export default function Introduction() {
  return (
    <Wrapper>
      <AnimatedPersonalInfo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-gray-900) 100%);
`;

const AnimatedPersonalInfo = styled(PersonalInfo)`
  animation: fadeInUp 1s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
