import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../../redux/doctors/doctorsSlice';
import Doctors from './Doctors';

export default function DoctorsContainer() {
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);

 
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  const doctorsToShow = doctors.slice(startIndex, startIndex + 3);

  const handleNextDoctors = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % doctors.length);
  };

  const handlePrevDoctors = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? doctors.length - 3 : prevIndex - 3));
  };

  return (
    <>
      <ul className="doctors-container">
        <li className="doctor">Doctor</li>
      </ul>
      <div>
        {doctorsToShow.map((doctor) => (
          <Doctors
            key={doctor.id}
            doctorId={doctor.id}
            doctorName={doctor.name}
            specialization={doctor.specialization}
            consultationFee={doctor.consultation_fee}
            prescriptionFee={doctor.prescription_fee}
          />
        ))}
      </div>
      <button
        onClick={handlePrevDoctors}
        type="button"
      >
        Previous
      </button>
      <button
        onClick={handleNextDoctors}
        type="button"
      >
        Next
      </button>
    </>
  );
}
