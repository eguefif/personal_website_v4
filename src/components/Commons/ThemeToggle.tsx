import { styled } from 'styled-components';
import { Sun, Moon } from 'react-feather';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      applyTheme(savedTheme === 'dark');
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      applyTheme(prefersDark);
    }
  }, []);

  const applyTheme = (dark: boolean) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <ToggleButton 
      onClick={toggleTheme} 
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  
  background: var(--color-gray-800);
  border: 1px solid var(--color-gray-600);
  border-radius: 8px;
  padding: 8px;
  
  color: var(--color-white);
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-gray-700);
    border-color: var(--color-gray-500);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;