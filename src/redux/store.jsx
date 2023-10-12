import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';

import currentUserReducer from './currentUser/currentUserSlice';

import appointmentsReducer from './appointments/appointmentsSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,

    currentUser: currentUserReducer,

    appointments: appointmentsReducer,

  },
});

export default store;
