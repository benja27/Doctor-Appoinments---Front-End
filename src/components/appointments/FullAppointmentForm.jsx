import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';

export default function FullBookForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const doctors = useSelector((state) => state.doctors.doctors);

  const handleAddAppointment = () => {
    const userId = JSON.parse(localStorage.getItem('user')).id;

    const newAppointment = {
      location,
      date,
      user_id: userId,
      doctor_id: doctorId,
    };
    dispatch(addAppointment(newAppointment));

    setDate('');
    setLocation('');
    navigate('/appointments');
  };

  return (

    <div className="info w-100 ">

      <div className="text-center mb-5">
        <h1 className="underline-text">ADD APPOINTMENT</h1>

        <p>
          “We practice medicine that our historical ancestors could only dream of,
          and we have access to amazing treatments and cures for our patients on a daily basis.”
          ― Suneel Dhand, MD
        </p>
      </div>

      <div className="col-12 d-md-flex justify-content-around  justify-content-around">
        <div className="mb-3 mb-md-0">
          <input
            aria-label="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3 mb-md-0">
          <input
            aria-label="date"
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3 mb-md-0">
          <select
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="form-select"
          >
            <option value="">Select a doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={handleAddAppointment}
            className="btn btn-primary"
          >
            Add Appointment
          </button>
        </div>

        <div className={`text-center  ${window.innerWidth < 768 ? 'pt-4' : ''} mb-4 d-flex align-items-center justify-content-center`}>
          <Link to="/">
            <button type="button" className="btn btn-secondary">Home</button>
          </Link>
        </div>
      </div>
    </div>

  );
}
