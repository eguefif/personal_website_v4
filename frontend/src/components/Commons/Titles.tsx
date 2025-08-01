import { styled } from 'styled-components';

export const H1 = styled.h1`
  font-size: 2.0rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  font-size: 1.3rem;
`;

export const SectionTitle = ({title}: {title: string}) => {
  return (
    <Wrapper>
      <H2>{title}</H2>
      <LineBreak />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`;

const LineBreak = styled.div`
  background-color: var(--color-white);
  height: 2px;
  width: 100%;
  margin-top: 8px;
`;
