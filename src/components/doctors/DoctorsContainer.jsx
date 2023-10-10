import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../../redux/doctors/doctorsSlice';
import Doctors from './Doctors';

export default function DoctorsContainer() {
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, doctors.length]);

  if (isLoading) {
    return <p>Loading...</p>;
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
      <button onClick={handlePrevDoctors}>Previous</button>
      <button onClick={handleNextDoctors}>Next</button>
    </>
  );
}
