import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const doctor = useSelector((state) => state.doctors);
  const {selectUserId} = useSelector((state) => state.currentUser);

  const handleAddAppointment = () => {
    const newAppointment = {
      location,
      date,
      user_id: selectUserId,
      doctor_id: doctor.id,
    };
    dispatch(addAppointment(newAppointment));

    setDate('');
    setLocation('');

    navigate('/');
  };

  return (
    <div>
      <h1>ADD APPOINTMENT</h1>
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
