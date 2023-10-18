import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';
// import FullBookForm from './FullAppointmentForm';

export default function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const {selectedDoctor} = useSelector((state) => state.doctors);

 const userId = JSON.parse(localStorage.getItem('user')).id;

  const handleAddAppointment = () => {
    const newAppointment = {
      location,
      date,
      user_id: userId,
      doctor_id: selectedDoctor,
    };
    dispatch(addAppointment(newAppointment));

    setDate('');
    setLocation('');
    console.log(newAppointment)

    navigate('/');
  };

  return (

    <div className="position-relative ">
      <div className="imagen-con-filtro position-absolut">
        <img src="https://picsum.photos/id/1/300/300" alt="Descripción de la imagen" />
      </div>

      <div className="info col-8 text-center">
        <h4 className="h3 mb-4 text-white">Set an Appoinment</h4>
        <h6 className="h6 text-white mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab soluta qui ea officia beatae eos. Iure adipisci ab voluptatibus ea incidunt nobis, atque commodi quam aspernatur odio. Obcaecati, veniam. </h6>
        <div className="d-flex mb-4 justify-content-center gap-4">
          <button className="btn btn-primary" type="button">Set Appoinment</button>
        </div>
      </div>

      {/* <FullBookForm />       */}
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

    </div>



    




  );
}
