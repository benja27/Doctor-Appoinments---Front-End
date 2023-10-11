import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctors/doctorsSlice';
import appointmentsReducer from './appointments/appointmentsSlice';

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
  },
});

export default store;
