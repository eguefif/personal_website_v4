import { styled } from 'styled-components';

export default function Introduction() {
  return (
    <Wrapper>
      <Content>
        <Name>Emmanuel Guefif</Name>
        <Title>Full Stack Developer</Title>
        <FormerTitle>Former Elementary School Teacher</FormerTitle>
      </Content>
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

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
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

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-gray-300);
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const FormerTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-gray-400);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
