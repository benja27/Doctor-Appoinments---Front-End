import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';
import imgDoc from '../../assets/image/doc2.jpg';

export default function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const { selectedDoctor } = useSelector((state) => state.doctors);

  const userId = JSON.parse(localStorage.getItem('user')).id;

  const handleAddAppointment = () => {
    const newAppointment = {
      location,
      date,
      user_id: userId,
      doctor_id: selectedDoctor,
    };
    dispatch(addAppointment(newAppointment));

    setTimeout(() => {
      window.location.reload();
    }, 500);
    navigate('/');

    setDate('');
    setLocation('');
    navigate('/appointments');
  };

  return (
    <div className="position-relative ">

      <div className="imagen-con-filtro position-absolut vh-100">
        <img className="vh-100" style={{ objectFit: 'cover' }} src={`${imgDoc}`} alt="Descripción de la imagen" />
      </div>

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
          <div className=" mb-3 mb-md-0">
            <input
              aria-label="location"
              type="text"
              placeholder="Location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              aria-label="date"
              type="date"
              placeholder="Date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="text-center d-flex justify-content-center gap-5 mb-3">
            <button type="button" className="btn btn-primary" onClick={handleAddAppointment}>
              Add Appointment
            </button>

            <Link to="/">
              <button type="button" className="btn btn-success">Home</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
