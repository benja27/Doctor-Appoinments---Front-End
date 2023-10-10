import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDoctors, deleteDoctor, showDoctor } from '../../redux/doctors/doctorsSlice';

export default function ShowDoctor() {
  const { doctorId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showDoctor(doctorId));
  }, [dispatch, doctorId]);

  const doctor = useSelector((state) => state.doctors.showDoctor);
  const isLoading = useSelector((state) => state.doctors.isLoading);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleDeleteDoctor = async () => {
    try {
      await dispatch(deleteDoctor(doctor.id));

      dispatch(fetchDoctors());
    } catch (error) {
      throw new Error('Failed to delete doctor');
    }
  };

  return (
    <>
      {doctor && (
      <ul>
        <li>
          Name:
          {doctor.name}
        </li>
        <li>
          Specialization:
          {doctor.specialization}
        </li>
        <li>
          Consultation Fee:
          {doctor.consultation_fee}
        </li>
        <li>
          Prescription Fee:
          {doctor.prescription_fee}
        </li>
        <button
          type="button"
          onClick={handleDeleteDoctor}
        >
          Delete Doctor
        </button>
      </ul>
      )}
    </>
  );
}
