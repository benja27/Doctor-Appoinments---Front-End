import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import appointmentsReducer from './appointments/appointmentsSlice';

import currentUserReducer from './currentUser/currentUserSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,

    currentUser: currentUserReducer,

    appointments: appointmentsReducer,

  },
});

export default store;
