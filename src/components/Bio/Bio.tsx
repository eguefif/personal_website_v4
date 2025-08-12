import { styled } from 'styled-components';
import { QUERIES } from 'components/constants';

import Biopic from './Biopic';
import SocialLinks from './SocialLinks';
import Whoami from './Whoami';

export default function SideBar() {
  return (
      <SideBarWrapper>
        <Whoami />
        <SocialLinks />
        <Biopic />
      </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media ${QUERIES.laptopAndUp} {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 64px;
  }
`;

