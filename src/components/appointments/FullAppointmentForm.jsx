import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const doctors = useSelector((state) => state.doctors.doctors);

  const handleAddAppointment = () => {
    const newAppointment = {
      location,
      date,
      user_id: 13,
      doctor_id: doctorId,
    };
    dispatch(addAppointment(newAppointment));

    setDate('');
    setLocation('');
  };

  return (
    <div>
      <h1>MAKE APPOINTMENT</h1>
      <div>
        <input
          aria-label="location"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          aria-label="date"
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        >
          <option value="">Select a doctor</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleAddAppointment}
        >
          Add Appointment
        </button>
      </div>
    </div>
  );
}
