import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor } from '../../redux/doctors/doctorsSlice';
import Side_menu from '../side_menu';

export default function BookForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [consultationFee, setConsultationFee] = useState('');
  const [prescriptionFee, setPrescriptionFee] = useState('');
  const [photo, setPhoto] = useState('');
  const userId = useSelector((state) => state.currentUser.currentUser.id);

  const handleAddDoctor = () => {
    const newDoctor = {
      name,
      specialization,
      consultation_fee: consultationFee,
      prescription_fee: prescriptionFee,
      photo,
      user_id: userId,
    };
    dispatch(addDoctor(newDoctor));

    console.log(newDoctor);

    // Reset input fields after adding the doctor
    setName('');
    setSpecialization('');
    setConsultationFee('');
    setPrescriptionFee('');
    setPhoto('');
  };

  return (

    <div className='d-flex vh-100 p-0 m-0'  >
      <Side_menu />
      <h1 className="add-new-book">ADD NEW DOCTOR</h1>

      <div>
        <input
          type="text"
          placeholder="Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Doctor Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <input
          type="number"
          placeholder="Doctor Consultation Fee"
          value={consultationFee}
          onChange={(e) => setConsultationFee(e.target.value)}
        />
        <input
          type="number"
          placeholder="Doctor Prescription Fee"
          value={prescriptionFee}
          onChange={(e) => setPrescriptionFee(e.target.value)}
        />
        <input
          type="text"
          placeholder="link to doctor's photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button
          aria-label="add-btn"
          type="button"
          onClick={handleAddDoctor}
        >
          ADD DOCTOR
        </button>
      </div>
    </div>
  );
}
