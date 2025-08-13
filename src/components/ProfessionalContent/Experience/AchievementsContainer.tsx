import { styled } from 'styled-components';
import { ArrowRight } from 'react-feather';
import { QUERIES } from 'components/constants';

import AchievementsCollapsible from './AchievementsCollapsible';

export default function AchievementsContainer({achievements}: {achievements: string[]}) {
  let achievementsTag = achievements
                      .slice(0, 3)
                      .map((achievement, index) =>
                          <Achievement key={index}>
                              <Arrow size={'1.4rem'} strokeWidth={1.5}/>
                              {achievement}
                          </Achievement>
                      );

  let hoverCard;
  if (achievements.length >= 3) {
    const remainingAchievements = achievements.slice(3);
    hoverCard = <AchievementsCollapsible key="collapsible" achievements={remainingAchievements} />
    achievementsTag.push(hoverCard);
  }

  return (
    <AchievementWrapper>
      <AchievementList>
        {achievementsTag}
      </AchievementList>
    </AchievementWrapper>
  );

}

export const Arrow = styled(ArrowRight)`
  margin-top: 2px;
`;

const AchievementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
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
  padding: 0px;
`;

export const Achievement = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;
