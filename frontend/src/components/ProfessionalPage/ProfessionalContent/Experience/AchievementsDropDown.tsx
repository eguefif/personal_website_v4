import { styled } from 'styled-components';
import { useState } from 'react';
import { Arrow } from './AchievementsContainer';

import { Achievement, AchievementList} from './AchievementsContainer';

export default function AchievementsDropDown({achievements}: {achievements: string[]}) {
  const [hidden, setHidden] = useState('none');

  const achievementEntries = achievements
                                    .map((achievement, index) =>
                                      <Achievement key={index}>
                                          <Arrow size={'1.4rem'}/>
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
  top: 25px;
  right: 0;
  left: 0;
  color: var(--color-white);
  background-color: var(--color-gray-400);
  padding: 16px;
  border-radius: 5px;
`;
