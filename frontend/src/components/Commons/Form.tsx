import { styled } from 'styled-components';

export const InlineWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.3rem;
`;

export const AreaLabel = styled(Label)`
`;

export const InputLabel = styled(Label)`
  text-align: right;
  width: 150px;
  font-weight: 700;
  font-size: 1.3rem;
`;

export const TextInput = styled.input`
  width: 224px;
  background-color: var(--color-gray-900-alpha-10);
  border: solid 1px var(--color-gray-900-alpha-10);
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  min-width: 564px;
  min-height: 246px;
  background-color: var(--color-gray-900-alpha-10);
  border: solid 1px var(--color-gray-900-alpha-10);
  border-radius: 4px;
  padding: 12px;
`;

export const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const SubmitButton = styled.button`
  background-color: var(--color-primary); 
  color: var(--color-white);
  border-radius: 5px;
  border: none;
  font-size: 1.4rem;
  padding: 8px;
  &:hover {
    background-color: hsl(41 50% 40%);
  }
`;
