import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  doctors: [],
  isLoading: false,
  error: undefined,
  selectedDoctor: null,
};

const url = 'https://rails-j4lh.onrender.com/doctors';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `${token}`,
      },
    });
    const doctors = await response.json();
    return doctors;
  } catch (error) {
    throw new Error('Failed to fetch doctors');
  }
});

export const addDoctor = createAsyncThunk('doctors/addDoctor', async (doctor) => {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(doctor),
      headers: {
        'Content-Type': 'application/json',
        authorization: `${token}`,

      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to add doctor');
  }
});

export const deleteDoctor = createAsyncThunk('doctors/deleteDoctor', async (doctorId) => {
  const deleteUrl = `${url}/${doctorId}`;
  const token = localStorage.getItem('token');
  try {
    const response = await axios(
      deleteUrl, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete doctor');
  }
});

const doctorSlice = createSlice({
  name: 'doctorsSlice',
  initialState,
  reducers: {
    showDoctor: (state, action) => ({
      ...state,
      selectedDoctor: action.payload,
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDoctors.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchDoctors.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        doctors: action.payload,

      }))
      .addCase(fetchDoctors.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(addDoctor.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addDoctor.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        doctors: [...state.doctors, action.payload],
      }))
      .addCase(addDoctor.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(deleteDoctor.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteDoctor.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        doctors: state.doctors.filter((doctor) => doctor.id !== action.payload.id),
      }))
      .addCase(deleteDoctor.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { showDoctor } = doctorSlice.actions;

export default doctorSlice.reducer;
