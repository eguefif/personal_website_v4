import { styled } from 'styled-components';
import { ReactNode } from 'react';

interface NavIconButtonProps {
  label: string;
  children: ReactNode;
}

export default function NavIconButton(props: NavIconButtonProps) {
  return (
    <Button>
      {props.children}
      <Label>{props.label}</Label>
    </Button>
  );
}

const Button = styled.div`
  border: solid 1px white;
  padding: 12px;
  width: 200px;
  height: 200px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  &:hover {
    border: solid 1px var(--color-gray-400-transparent);
    background-color: var(--color-gray-400-transparent);
}
`;

const Label = styled.div`
`;
