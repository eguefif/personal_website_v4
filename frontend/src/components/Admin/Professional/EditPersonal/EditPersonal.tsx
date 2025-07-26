import { styled } from 'styled-components';
import PersonalForm from './PersonalForm';
import { H1 } from 'components/Commons/Titles'

export default function EditPersonal() {
  return (
    <Wrapper>
      <H1>Edit Personal</H1>
      <PersonalForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 64px;
`;
