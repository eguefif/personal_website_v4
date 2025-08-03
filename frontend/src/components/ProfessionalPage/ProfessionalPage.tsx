import ProfessionalContent from './ProfessionalContent/ProfessionalContent';
import SideBar from './SideBar/SideBar';
import { QUERIES } from 'components/constants';
import useFetchUser from './useFetchUser';

import { styled } from 'styled-components';

export default function ProfessionalPage() {
  const { userData, loading } = useFetchUser();

  if (!loading) {
    return (
      <Wrapper>
        <SideBar user={userData}/>
        <ProfessionalContent user={userData} />
      </Wrapper>
    )
  } else {
      return (
      <div>Loading</div>
    );
  }
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    align-items: start;
    gap: 264px;
  }
`;
