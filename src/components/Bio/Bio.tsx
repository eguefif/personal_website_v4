import { styled } from 'styled-components';
import { QUERIES } from 'components/constants';

import Biopic from './Biopic';
import SocialLinks from './SocialLinks';
import PersonalInfo from 'components/Commons/PersonalInfo';

export default function SideBar() {
  return (
      <SideBarWrapper>
        <PersonalInfo />
        <Biopic />
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
    flex: 1;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 64px;
  }
`;

