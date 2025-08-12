import { styled } from 'styled-components';

interface PersonalInfoProps {
  name?: string;
  title?: string;
  formerTitle?: string;
  className?: string;
}

export default function PersonalInfo({ 
  name = "Emmanuel Guefif", 
  title = "Mid-level Developer", 
  formerTitle = "Former Elementary School Teacher",
  className 
}: PersonalInfoProps) {
  return (
    <Content className={className}>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <FormerTitle>{formerTitle}</FormerTitle>
    </Content>
  );
}

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
