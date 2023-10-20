import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteDoctor } from '../../redux/doctors/doctorsSlice';
import Loader from '../index_page/Loader';
import SideMenu from '../SideMenu';

export default function DeleteDoctorsContainer() {
  const [removed, setRemoved] = useState(false);
  const { doctors, isLoading } = useSelector((state) => state.doctors);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Loader />
    );
  }

  const handleDeleteDoctor = (id) => {
    dispatch(deleteDoctor(id));
    setRemoved(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
    navigate('/');
  };

  return (
    <div className="d-flex">
      <SideMenu />
      <div className="d-flex bg_doctor2 vh-100 align-items-center bg-light justify-content-center flex-column  w-100 ">

        <div className="doctors-container mb-5 ">
          <span className="doctor h2 bg-dar round p-3 mb-3" style={{ color: 'gold', backgroundColor: '#0FC00F' }}>Choosse a Doctor to delete:</span>
        </div>

        <div className="d-flex flex-column gap-4 p-3 col-10 col-md-6 bg-light round rounded">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="d-flex  gap-5 align-items-center justify-content-between px-3 py-4 shadow">
              <div className="d-flex gap-3 align-items-center">
                <h3>Name:</h3>
                <h3>{doctor.name}</h3>
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleDeleteDoctor(doctor.id)}
                  className="btn btn-danger"
                  type="button"
                >
                  <h4>{removed ? 'Deleted' : 'Delete'}</h4>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  );
}
