import { styled } from 'styled-components';
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';

export default function SocialLinks() {
  return (
    <Wrapper>
      <SocialLink>
        <Linkedin />
      </SocialLink>
      <SocialLink>
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
`;
