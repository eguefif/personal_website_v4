import api from 'components/api';
import { dispatch } from 'react';

export function login(user: string, password: string) : boolean {
  dispatch({
    type: 'login',
    user,
    password,
  });
}

export function logout() {
  dispatch({
    type: 'logout',
  });
}

export function isAuthenticated() {
  dispatch({
    type: 'isAuthenticated',
  });
}

function loginReducer(token, action) {
  switch(action.type) {
    case 'login':  {
      token = 'hello';
      console.log('login');
                  return token;
    }
    case 'logout': {
      token = undefined;
      console.log('logout');
      return token;
    }
    case 'get_token':  {
      console.log(token);
      return token;
    }
  }
}
