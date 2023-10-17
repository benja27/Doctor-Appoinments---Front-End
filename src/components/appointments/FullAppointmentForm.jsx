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

    <div className=' vh-100 d-flex flex-column align-items-center justify-content-center gap-5 bg-success position-relative imagen-con-filtro' >

      <div className="imagen-con-filtro position-absolut">
        <img src="https://picsum.photos/id/1/300/300" alt="Descripción de la imagen" />
      </div>

      <div className='info w-100' >
        <div className='text-center' >
          <h1 className='h1'  >MAKE APPOINTMENT</h1>
        </div>


        <div className='col-12 d-md-flex justify-content-around  justify-content-around' >
          <div className='mb-3 mb-md-0' >
            <input
              aria-label="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='form-control'
            />
          </div>
          <div className='mb-3 mb-md-0' >
            <input
              aria-label="date"
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='form-control'
            />
          </div>

          <div className='mb-3 mb-md-0' >
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              className='form-select'
            >
              <option value="">Select a doctor</option>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className='text-center' >
            <button
              type="button"
              onClick={handleAddAppointment}
              className='btn btn-primary'
            >
              Add Appointment
            </button>
          </div>
        </div>

      </div>



    </div>
  );
}
