import  api from 'components/api';
import { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';

import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import { InlineWrapper, InputLabel, TextInput, SubmitButton } from 'components/Commons/Form';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const isSubmittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    isSubmittingRef.current = true;
    
    try {
      const response = await api.post('/token/', 
        {
          username: username,
          password: password,
        },{
        headers: {
              'Content-Type': 'multipart/form-data'
          }});
      setUser(response.data);
      console.log(response.data);
      localStorage.setItem('user', response.data);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      isSubmittingRef.current = false;
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  return (
    <LoginWrapper>
      <GlobalStyles />
      <LoginForm onSubmit={handleSubmit}>
        <Title>Admin Login</Title>
        
        <InlineWrapper>
          <InputLabel htmlFor="username">Username:</InputLabel>
          <TextInput
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InlineWrapper>

        <InlineWrapper>
          <InputLabel htmlFor="password">Password:</InputLabel>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InlineWrapper>

        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-gray-950);
  color: var(--color-black);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
  background-color: var(--color-gray-100);
  border-radius: 8px;
  border: 1px solid var(--color-gray-700);
  min-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 24px;
  color: var(--color-black);
`;
