import { styled } from 'styled-components';
import { Edit2 } from 'react-feather';

import IconButton from 'components/Commons/Buttons/IconButton';

export default function EditButton({ size = 24} : {size: number }) {

  return (
    <IconButton iconSize={size}>
      <Edit2 size={size}/>
    </IconButton>
  );
}
