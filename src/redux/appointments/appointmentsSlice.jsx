import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  appointments: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://rails-j4lh.onrender.com/appointments';

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    const appointments = await response.json();
    return appointments;
  } catch (error) {
    throw new Error('Failed to fetch appointments');
  }
});

export const addAppointment = createAsyncThunk('appointments/addAppointment', async (appointment) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(url, appointment, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add appointment');
  }
});

export const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (appointmentId) => {
  const deleteUrl = `${url}/${appointmentId}`;
  const token = localStorage.getItem('token');
  try {
    const response = await axios.delete(deleteUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete appointment');
  }
});

const appointmentSlice = createSlice({
  name: 'appointmentsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAppointments.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchAppointments.fulfilled, (state, action) => ({
        ...state,
        appointments: action.payload,
        isLoading: false,
      }))
      .addCase(fetchAppointments.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        isLoading: false,
      }))
      .addCase(addAppointment.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addAppointment.fulfilled, (state, action) => ({
        ...state,
        appointments: [...state.appointments, action.payload],
        isLoading: false,
      }))
      .addCase(addAppointment.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        isLoading: false,
      }))
      .addCase(deleteAppointment.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteAppointment.fulfilled, (state, action) => ({
        ...state,
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== action.payload.id,
        ),
        isLoading: false,
      }))
      .addCase(deleteAppointment.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
        isLoading: false,
      }));
  },
});

export default appointmentSlice.reducer;
