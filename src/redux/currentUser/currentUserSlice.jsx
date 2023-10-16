import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  token: '',
  isAuth: false,
  error: null,
};

export const signupUser = createAsyncThunk('currentUser/signup', async (userInfo) => {
  try {
    const url = 'https://rails-j4lh.onrender.com/signup';
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.ok) {
      const token = res.headers.get('Authorization');
      const user = data.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { token, user };
    }
    throw data.error;
  } catch (error) {
    return error;
  }
});

export const loginUser = createAsyncThunk('currentUser/login', async (userInfo) => {
  try {
    const url = 'https://rails-j4lh.onrender.com/login';
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.ok) {
      const token = res.headers.get('Authorization');
      const { user } = data.status.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { token, user };
    }
    throw data.error;
  } catch (error) {
    return error;
  }
});

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    authRequest: (state) => ({
      ...state,
      loading: true,
    }),
    authSuccess: (state, action) => ({
      ...state,
      currentUser: action.payload.user,
      token: action.payload.token,
      isAuth: true,
    }),
    authFailure: (state, action) => ({
      ...state,
      isAuth: false,
      error: action.payload,
    }),
    logout: (state) => ({
      ...state,
      currentUser: {},
      token: '',
      isAuth: false,
    }),

  },
});

export const {
  authRequest, authSuccess, authFailure, logout,
} = currentUserSlice.actions;

export const logoutUser = createAsyncThunk('currentUser/logout', async (_, { dispatch }) => {
  try {
    const url = 'http://localhost:3001/logout';
    dispatch(logout());
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return data;
    }
    throw data.error;
  } catch (error) {
    return error;
  }
});

export const selectCurrentUser = (state) => state.currentUser.currentUser;
export const selectToken = (state) => state.currentUser.token;
export const selectUserId = (state) => state.currentUser.currentUser?.id;

export default currentUserSlice.reducer;
