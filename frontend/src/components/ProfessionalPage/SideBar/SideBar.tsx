import { styled } from 'styled-components';
import { QUERIES } from 'components/constants';

import SideMenu from './SideMenu';
import SocialLinks from './SocialLinks';
import Whoami from './Whoami';

export default function SideBar({ user }) {
  return (
      <SideBarWrapper>
        <Whoami user={user}/>
        <SideMenu />
        <SocialLinks />
      </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
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
    gap: 196px;
  }
`;

