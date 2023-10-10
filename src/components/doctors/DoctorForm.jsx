import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../../redux/doctors/doctorsSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [consultation_fee, setConsultationFee] = useState('');
  const [prescription_fee, setPrescriptionFee] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddDoctor = () => {
    const newDoctor = {
      name,
      specialization,
      consultation_fee,
      prescription_fee,
      photo,
    };
    dispatch(addDoctor(newDoctor));

    // Reset input fields after adding the doctor
    setName('');
    setSpecialization('');
    setConsultationFee('');
    setPrescriptionFee('');
    setPhoto('');
  };

  return (
    <div>
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
          value={consultation_fee}
          onChange={(e) => setConsultationFee(e.target.value)}
        />
        <input
          type="number"
          placeholder="Doctor Prescription Fee"
          value={prescription_fee}
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
