import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '../../redux/appointments/appointmentsSlice';
import {useNavigate } from 'react-router-dom';
import BookForm from './AppointmentForm';

export default function FullBookForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const doctors = useSelector((state) => state.doctors.doctors);

  const handleAddAppointment = () => {
    const userId =JSON.parse(localStorage.getItem('user')).id;
   
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
    navigate('/appointments')
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

      <FullBookForm /> 

      

    </div>





    
  );
}
