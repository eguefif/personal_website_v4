import { styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'react-feather';
import { ReactNode } from 'react';

interface EditDialogProps {
  trigger: ReactNode
  form: ReactNode,
  handleSubmit: (FormData) => null, 
  title: string,
  description: string
  open: boolean,
  setOpen: (boolean) => null,
}

export default function FormDialog(props: EditDialogProps) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.setOpen}>
      <Trigger>
        {props.trigger}
      </Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Wrapper>
            <CloseButton aria-label="close" onClick={() => props.setOpen(false)} >
              <X />
            </CloseButton>
            <Dialog.Title>{props.title}</Dialog.Title>
            <Dialog.Description>
              {props.description}
            </Dialog.Description>
            {props.form}
          </Wrapper>
        </Content>
      </Dialog.Portal>

    </Dialog.Root>
  );
}

const Trigger = styled(Dialog.Trigger)`
  border: none;
  background-color: transparent;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: none;
  
  &:focus {
    outline: none;
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--color-overlay);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-100);
  color: black;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 624px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 1.5rem;
`;

const CloseButton = styled(Dialog.Close)`
  transform: scale(1.2);
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  padding: 2px;
  color: var(--color-black);
  pointer: cursor;
  &:hover {
    color: var(--color-gray-600);
    transform: scale(1.5);
  }
`;
