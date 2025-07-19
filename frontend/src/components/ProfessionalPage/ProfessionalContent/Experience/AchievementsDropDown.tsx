import { styled } from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Achievement, AchievementList} from './AchievementsContainer';

export default function AchievementsDropDown({achievements}: {achievements: string[]}) {
  const [hidden, setHidden] = useState('none');

  const achievementEntries = achievements
                                    .map((achievement, index) =>
                                      <Achievement key={index}>
                                          <FontAwesomeIcon icon={faCircleChevronRight} />
                                          {achievement}
                                      </Achievement>
                                  );

  return (
  <Wrapper 
      onMouseEnter={() => setHidden('flex')}
      onMouseLeave={() => setHidden('none')} style={{ '--hidden': hidden }}
    >
      See More
      <DropDown>
        <AchievementList>
          {achievementEntries}
        </AchievementList>
      </DropDown>
  </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  color: var(--color-primary);
  cursor: pointer;
`;

const DropDown = styled.div`
  display: var(--hidden);
  overflow: auto;
  position: absolute;
  top: 15px;
  left: 30px;
  background-color: var(--color-secondary);
  padding: 16px;
  border-radius: 5px;
`;
