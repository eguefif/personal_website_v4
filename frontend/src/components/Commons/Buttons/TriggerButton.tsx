import { styled } from 'styled-components';

export default function TriggerButton({children}) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-primary-brighter);
  }
`;
