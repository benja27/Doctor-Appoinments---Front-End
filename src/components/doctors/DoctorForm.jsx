import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor } from '../../redux/doctors/doctorsSlice';
import SideMenu from '../SideMenu';
import { useNavigate } from 'react-router-dom';

export default function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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

    // Reset input fields after adding the doctor
    setName('');
    setSpecialization('');
    setConsultationFee('');
    setPrescriptionFee('');
    setPhoto('');
    navigate('/')
  };

  return (
    <div className='d-flex vh-100 p-0 m-0 '  >

      <Side_menu />

      <div className='d-flex flex-column align-items-center justify-content-center gap-5  w-100 bg-light' >

        <h1 className="add-new-book bg-dark px-4 py-2 round rounded" style={{color:"gold"}} >ADD NEW DOCTOR</h1>

        <div className='d-flex flex-column col-10 col-lg-6 gap-3 shadow px-2 py-3' >
          <input
            type="text"
            className='form-control'
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className='form-control'
            placeholder="Doctor Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <input
            type="number"
            className='form-control'
            placeholder="Doctor Consultation Fee"
            value={consultationFee}
            onChange={(e) => setConsultationFee(e.target.value)}
          />
          <input
            type="number"
            className='form-control'
            placeholder="Doctor Prescription Fee"
            value={prescriptionFee}
            onChange={(e) => setPrescriptionFee(e.target.value)}
          />
          <input
            type="text"
            className='form-control'
            placeholder="link to doctor's photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button
            aria-label="add-btn"
            className='btn btn-primary'
            type="button"
            onClick={handleAddDoctor}
          >
            ADD DOCTOR
          </button>
        </div>
      </div>
    </div>
  );
}
