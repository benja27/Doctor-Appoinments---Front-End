import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors, deleteDoctor } from '../../redux/doctors/doctorsSlice';
import { fetchAppointments, deleteAppointment } from '../../redux/appointments/appointmentsSlice';
import Side_menu from '../index_page/side_menu';
import Loader from '../index_page/Loader';

export default function DeleteDoctorsContainer() {
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const { appointments } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchAppointments());
  },
  [dispatch]);

  if (isLoading) {
    return (
      <Loader />
    )
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  const handleDeleteDoctor = async (id) => {
    try {
      // Create an array of appointment deletion promises
      const appointmentDeletionPromises = [];

      // Iterate through the appointments and create promises for each deletion
      appointments.forEach((appointment) => {
        if (appointment.doctor_id === id) {
          appointmentDeletionPromises.push(dispatch(deleteAppointment(appointment.id)));
        }
      });

      // Wait for all appointment deletion promises to complete
      await Promise.all(appointmentDeletionPromises);

      // Once all appointments are deleted, delete the doctor
      await dispatch(deleteDoctor(id));
    } catch (error) {
      throw new Error('Error deleting doctor');
    }
  };

  return (
    <div className='d-flex' >
      <Side_menu />
      <div className='d-flex vh-100 align-items-center bg-light justify-content-center flex-column  w-100' >
      
      <div className="doctors-container mb-3">
        <span className="doctor h2 bg-dark round p-2 mb-3" style={{color:"gold"}} >Choosse a Doctor to delete:</span>
      </div>

      <div className='d-flex flex-column gap-4 p-3 ' >
        {doctors.map((doctor) => (
          <div key={doctor.id} className='d-flex  gap-5 align-items-center justify-content-between px-3 py-4 shadow' >
            <div className='d-flex gap-3 align-items-center' >
              <h6>Name:</h6>      
              <h6>{doctor.name}</h6>                      
            </div>
            <div className='text-center' >
              <button
                onClick={() => dispatch(handleDeleteDoctor(doctor.id))}
                className='btn btn-danger'
                type="button"
              >
                Delete Doctor
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>


    
  );
}
