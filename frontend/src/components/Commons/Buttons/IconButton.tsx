import { styled } from 'styled-components';
import { ReactNode } from 'react';

interface IconButtonProps {
  iconSize: number;
  children: ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  const padding = 10;
  return (
    <Button style={{'--icon-size': props.iconSize + 'px', '--padding': padding + 'px'}}>
      {props.children}
    </Button>
  );
}

const Button = styled.div`
  border: solid 1px transparent;
  padding: var(--padding)px;
  width: calc(var(--padding) + var(--icon-size));
  height: calc(var(--padding) + var(--icon-size));
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: solid 1px var(--color-gray-400-alpha-50);
    background-color: var(--color-gray-400-alpha-50);
}
`;

const Label = styled.div`
`;
