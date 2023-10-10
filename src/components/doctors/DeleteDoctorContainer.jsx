import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors, deleteDoctor } from '../../redux/doctors/doctorsSlice';

export default function DeleteDoctorsContainer() {
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  },
  [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

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
              onClick={() => dispatch(deleteDoctor(doctor.id))}
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
