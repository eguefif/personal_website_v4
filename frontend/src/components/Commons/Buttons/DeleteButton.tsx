import { styled } from 'styled-components';
import { X } from 'react-feather';

import IconButton from 'components/Commons/Buttons/IconButton';

export default function DeleteButton({ size = 24} : {size: number }) {
  return (
    <IconButton iconSize={size}>
      <X size={size}/>
    </IconButton>
  );
}

