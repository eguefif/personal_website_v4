import { keyframes, styled } from 'styled-components';
import { useState } from 'react';
import { Arrow } from './AchievementsContainer';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown, ChevronUp } from 'react-feather';

import { Achievement, AchievementList} from './AchievementsContainer';

export default function AchievementsCollapsible({achievements}: {achievements: string[]}) {
  const [open, setOpen] = useState(false);

  const triggerContent = !open ?
            <ShowControl><ChevronDown /><TriggerText>Show More</TriggerText></ShowControl>
            : <ShowControl><ChevronUp /><TriggerText>Show Less</TriggerText></ShowControl>
             

  const achievementEntries = achievements
                                    .map((achievement, index) =>
                                      <Achievement key={index}>
                                          <Arrow size={'1.4rem'}/>
                                          {achievement}
                                      </Achievement>
                                  );

  return (
      <Root open={open} onOpenChange={setOpen}>
          {triggerContent}
        <Content>
          {achievementEntries}
        </Content>
      </Root>
  );
}

const Root = styled(Collapsible.Root)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const ShowControl = styled(Collapsible.Trigger)`
  margin: auto;
  border: none;
  color: var(--color-white);
  background-color: inherit;
  border-radius: none;
  display: flex;
  gap: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: var(--color-gray-400);
  }
`;

const TriggerText = styled.div`
`

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

const slideUp = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;

const Content = styled(Collapsible.Content)`
  overflow: hidden;
  margin-top: 8px;
  border-radius: 5px;
  
  &[data-state="open"] {
    animation: ${slideDown} 300ms ease-out;
  }
  
  &[data-state="closed"] {
    animation: ${slideUp} 300ms ease-out;
  }
`;

