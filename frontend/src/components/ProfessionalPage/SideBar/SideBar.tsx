import { styled } from 'styled-components';

import SideMenu from './SideMenu';
import SocialLinks from './SocialLinks';
import Whoami from './Whoami';

export default function SideBar() {
  return (
      <SideBarWrapper>
        <Whoami />
        <SideMenu />
        <SocialLinks />
      </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 196px;
`;

