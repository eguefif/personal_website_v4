import { styled } from 'styled-components';

import type { Project } from './EditPortfolio';

import { AreaLabel, InputLabel, TextInput, TextArea, AreaWrapper, SubmitButton, InlineWrapper } from 'components/Commons/Form';

interface PortfolioFormProps {
  project: Project,
  handleSubmit: (formdata) => undefined,
}

export default function PortFolioForm(props: PortfolioFormProps) {
  return(
      <form action={props.handleSubmit}>
        <FormWrapper>
          <InlineWrapper>
            <InputLabel htmlFor="title">Title</InputLabel>
            <TextInput 
                type="text" 
                name="title" 
                id="title" 
                defaultValue={props.project?.title} 
            />
          </InlineWrapper>

          <AreaWrapper>
          <AreaLabel htmlFor="description">Description</AreaLabel>
          <TextArea 
            type="text" 
            name="description" 
            id="description" 
            defaultValue={props.project?.description} 
          />
          </AreaWrapper>
          <SubmitButton type="submit">Save</SubmitButton>
        </FormWrapper>
      </form>
  );
}
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;


