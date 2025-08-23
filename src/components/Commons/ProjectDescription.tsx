import { styled } from 'styled-components';
import { H2 } from 'components/Commons/Titles';

export enum ImagePosition {
  Left = 1,
  Right = 2
}

interface ProjectDescriptionProps {
  title: string;
  description: string;
  image?: { src: string, alt: string };
  imagePosition?: ImagePosition;
}

export default function ProjectDescription(
  { title, description, image, imagePosition }
  : ProjectDescriptionProps) {
  return (
    <DescriptionSection>
      <SectionTitle>{title}</SectionTitle>
      <ContentWrapper>
        {image && imagePosition === ImagePosition.Left && <SectionImage src={image.src} alt={image.alt} />}
        <SectionContent>{description}</SectionContent>
        {image && imagePosition === ImagePosition.Right && <SectionImage src={image.src} alt={image.alt} />}
      </ContentWrapper>
    </DescriptionSection>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled(H2)``;

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const SectionImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  margin: 0 auto;
  display: block;
`;
