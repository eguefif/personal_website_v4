import { styled } from 'styled-components';
import { Outlet } from 'react-router';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import AdminProfessionalPage from './Professional/AdminProfessionalPage';
import AdminHeader from './AdminHeader';

export default function Admin() {
  return (
    <Wrapper>
      <AdminHeader />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 128px;
`;

const ContentWrapper = styled.div`
  
`;
