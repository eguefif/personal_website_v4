import { styled } from 'styled-components';
import { GitHub, Linkedin } from 'react-feather';

export default function SocialLinks() {
  const socialUsername = 'eguefif';
  return (
    <Wrapper>
      <SocialLink href="https://linkedin.com/in/eguefif" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </SocialLink>
      <SocialLink href="https://github.com/eguefif" target="_blank" rel="noopener noreferrer">
        <GitHub />
      </SocialLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 44px;
  justify-content: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: var(--color-white);
  transform: scale(1);
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: var(--color-primary-brighter);
  }
`;
