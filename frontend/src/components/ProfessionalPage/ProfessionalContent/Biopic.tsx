import { styled } from 'styled-components';
import type { User } from '../useFetchUser';

export default function Biopic({ user }: { user: User | null }) {
  return(
    <BiopicWrapper id="Whoiam">
      { user?.biopic }
    </BiopicWrapper>
  );
}

const BiopicWrapper = styled.div`
  margin: auto;
  line-height: 1.8;
  text-align: justify;
  text-indent: 2rem;
  padding: 20px;
  white-space: pre-line;
`;
