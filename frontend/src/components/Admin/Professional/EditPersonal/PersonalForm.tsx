import { styled } from 'styled-components';

interface PersonalInfo {
  name: string,
  title: string,
  catchPhrase: string,
  biopic: string,
}

export default function PersonalForm(personalInfo: PersonalInfo) {
  return(
    <form>
      <FormWrapper>

        <InlineWrapper>
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextInput type="text" name="name" id="name" value={personalInfo.name} />
        </InlineWrapper>

        <InlineWrapper>
        <InputLabel htmlFor="title">Title</InputLabel>
        <TextInput type="text" name="title" id="title" value={personalInfo.title} />
        </InlineWrapper>

        <InlineWrapper>
        <InputLabel htmlFor="catch-phrase">Catch Phrase</InputLabel>
        <TextInput type="text" name="catch-phrase" id="catch-phrase" value={personalInfo.catchPhrase} />
        </InlineWrapper>

        <AreaWrapper>
        <AreaLabel htmlFor="biopic">Biopic</AreaLabel>
        <TextArea type="text" name="biopic" id="biopic" value={personalInfo.biopic} />
        </AreaWrapper>
        <SubmitButton>Save</SubmitButton>
      </FormWrapper>
    </form>
  );
}
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;


const InlineWrapper = styled.div`
  display: flex;
  gap: 16px;
  
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 1.3rem;
`;

const AreaLabel = styled(Label)`
`;

const InputLabel = styled(Label)`
  text-align: right;
  width: 150px;
  font-weight: 700;
  font-size: 1.3rem;
`;

const TextInput = styled.input`
  width: 224px;
  background-color: var(--color-secondary);
  border: solid 1px var(--color-secondary);
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  min-width: 564px;
  min-height: 546px;
  background-color: var(--color-secondary);
  border: solid 1px var(--color-secondary);
  border-radius: 4px;
`;

const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SubmitButton = styled.button`
  background-color: var(--color-primary); 
  color: var(--color-white);
  border-radius: 5px;
  border: none;
  font-size: 1.4rem;
  padding: 8px;
  
`;
