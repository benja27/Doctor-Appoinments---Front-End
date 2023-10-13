import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctor } from '../../redux/doctors/doctorsSlice';
import { fetchAppointments, deleteAppointment } from '../../redux/appointments/appointmentsSlice';

export default function DeleteDoctorsContainer() {
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const { appointments } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(fetchAppointments());
  },
  [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
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
    <>
      <ul className="doctors-container">
        <li className="doctor">Doctor</li>
      </ul>
      <div>
        {doctors.map((doctor) => (
          <ul key={doctor.id}>
            <li>
              Name:
              {doctor.name}
            </li>
            <button
              onClick={() => dispatch(handleDeleteDoctor(doctor.id))}
              type="button"
            >
              Delete Doctor
            </button>
          </ul>
        ))}
      </div>
    </>
  );
}
