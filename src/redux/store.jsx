import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import currentUserReducer from './currentUser/currentUserSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
