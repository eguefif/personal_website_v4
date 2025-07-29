import { styled } from 'styled-components';
import { useState } from 'react';
import { Arrow } from './AchievementsContainer';
import { HoverCard } from 'radix-ui';
import { CornerRightDown } from 'react-feather';

import { Achievement, AchievementList} from './AchievementsContainer';

export default function AchievementsHoverCard({achievements}: {achievements: string[]}) {
  const [hidden, setHidden] = useState('none');

  const achievementEntries = achievements
                                    .map((achievement, index) =>
                                      <Achievement key={index}>
                                          <Arrow size={'1.4rem'}/>
                                          {achievement}
                                      </Achievement>
                                  );

  return (
      <HoverCard.Root>
        <HoverCard.Trigger >
            <CornerRightDown />
        </HoverCard.Trigger >
        <HoverCard.Portal>
          <HoverCard.Content>
            <AchievementList>
              <Content>
              {achievementEntries}
              </Content>
            </AchievementList>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
  );
}

const Wrapper = styled.div`
  position: relative;
  color: var(--color-primary);
  cursor: pointer;
`;

const Content = styled.div`
  color: var(--color-white);
  background-color: var(--color-gray-400);
  padding: 16px;
  border-radius: 5px;
  transform-origin: var(--radix-hover-card-content-transform-origin);
  animation: scaleIn 0.1s ease-out;

  @keyframes scaleIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

