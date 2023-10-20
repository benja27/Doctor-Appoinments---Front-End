import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDoctor } from '../../redux/doctors/doctorsSlice';
import SideMenu from '../SideMenu';

export default function BookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    setName('');
    setSpecialization('');
    setConsultationFee('');
    setPrescriptionFee('');
    setPhoto('');
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="d-flex  vh-100 p-0 m-0 ">

      <SideMenu />

      <div className="d-flex bg_doctor flex-column align-items-center justify-content-center gap-4  w-100 bg-ligh">

        <button type="button" className="add-new-book btn px-4 py-2 round rounded" style={{ color: 'white', backgroundColor: '#0FC00F' }}>
          <h4 className="h4">ADD NEW DOCTOR</h4>
        </button>

        <div className="d-flex flex-column col-10 col-lg-6 gap-3 shadow px-2 py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Doctor Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Doctor Consultation Fee"
            value={consultationFee}
            onChange={(e) => setConsultationFee(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Doctor Prescription Fee"
            value={prescriptionFee}
            onChange={(e) => setPrescriptionFee(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-4"
            placeholder="link to doctor's photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button
            aria-label="add-btn"
            className="btn btn-primary"
            style={{ backgroundColor: '#0fc00f' }}
            type="button"
            onClick={handleAddDoctor}
            style={{ color: 'white', backgroundColor: '#0FC00F' }}
          >
            <h5>ADD DOCTOR</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
