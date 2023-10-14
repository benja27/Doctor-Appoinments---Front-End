
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctor } from '../../redux/doctors/doctorsSlice';
import { useState } from 'react';


export default function DeleteDoctorsContainer() {
  const [removed, setRemoved] = useState(false);
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
 
  const dispatch = useDispatch();

 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }
 const handleDeleteDoctor = (id) => {
  dispatch(deleteDoctor(id));
  setRemoved(true);
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
              onClick={() => handleDeleteDoctor(doctor.id)}
              type="button"
            >
              {removed ? 'Removed' : "Delete"}
             
            </button>
          </ul>
        ))}
      </div>
    </>
  );
}
