import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';
import BookForm from './AppointmentForm';

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
    console.log(newAppointment);

    setDate('');
    setLocation('');
    navigate('/appointments');
  };

  return (
  // <div className="position-relative ">
  //   <div className="imagen-con-filtro position-absolut">
  //     <img
  //       src="https://picsum.photos/id/1/300/300"
  //       alt="Descripción de la imagen"
  //     />
  //   </div>

  //   <div className="info col-8 text-center">
  //     <h4 className="h3 mb-4 text-white">Set an Appoinment</h4>
  //     <h6 className="h6 text-white mb-4">
  //       {" "}
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
  //       soluta qui ea officia beatae eos. Iure adipisci ab voluptatibus ea
  //       incidunt nobis, atque commodi quam aspernatur odio. Obcaecati, veniam.{" "}
  //     </h6>
  //     <div className="d-flex mb-4 justify-content-center gap-4">
  //       <button className="btn btn-primary" type="button">
  //         Set Appoinment
  //       </button>
  //     </div>
  //   </div>

  //   <div className=" vh-100 d-flex flex-column align-items-center justify-content-center gap-5 bg-success position-relative imagen-con-filtro">
  //     <div className="imagen-con-filtro position-absolut">
  //       <img
  //         src="https://picsum.photos/id/1/300/300"
  //         alt="Descripción de la imagen"
  //       />
  //     </div>

    <div className="info w-100">

      <div className="text-center">
        <h1 className="h1">MAKE APPOINTMENT</h1>
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
      </div>
    </div>

  //   </div>
  // </div>
  );
}
