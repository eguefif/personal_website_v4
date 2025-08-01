import { styled } from 'styled-components';

export const TechList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

export const TechEntry = styled.li`
  padding: 8px;
  list-style-type: none;
  border-radius: 15px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  text-align: center;
  height: 100%;
  width: 100%;
`;
