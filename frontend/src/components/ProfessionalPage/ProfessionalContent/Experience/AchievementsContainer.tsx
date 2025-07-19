import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import AchievementsDropDown from './AchievementsDropDown';

export default function AchievementsContainer({achievements}: {achievements: string[]}) {
  let achievementsTag = achievements
                      .slice(0, 3)
                      .map((achievement, index) =>
                          <Achievement key={index}>
                              <FontAwesomeIcon icon={faCircleChevronRight} />
                              {achievement}
                          </Achievement>
                      );

  let dropDown;
  if (achievements.length >= 3) {
    const remainingAchievements = achievements.slice(3);
    dropDown = <AchievementsDropDown achievements={remainingAchievements} />
  }

  return (
        <AchievementWrapper>
          <AchievementList>
            {achievementsTag}
          </AchievementList>
          <RemainingAchievementWrapper>
            {dropDown}
          </RemainingAchievementWrapper>
        </AchievementWrapper>
  );

}

const AchievementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const RemainingAchievementWrapper = styled.div`
  width: 100%;
  text-align: center;
`;


export const AchievementList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
`;

export const Achievement = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;
