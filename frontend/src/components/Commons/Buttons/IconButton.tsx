import { styled } from 'styled-components';
import { ReactNode } from 'react';

interface IconButtonProps {
  label: string;
  children: ReactNode;
}

const IconButton = ({label, children} :IconButtonProps) => {
  return (
    <Wrapper>
      <Button>
        {children}
        <Label>{label}</Label>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`

const Button = styled.div`
  border: solid 1px white;
  width: 200px;
  height: 200px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  &:hover {
    background-color: var(--color-gray-400-transparent);
}
`;

const Label = styled.div`
`;

export default IconButton;
