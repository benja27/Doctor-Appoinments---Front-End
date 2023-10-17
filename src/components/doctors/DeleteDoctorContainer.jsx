
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctor } from '../../redux/doctors/doctorsSlice';
import { useState } from 'react';
import Loader from '../index_page/Loader';
import SideMenu from '../SideMenu';


export default function DeleteDoctorsContainer() {
  const [removed, setRemoved] = useState(false);
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
 
  const dispatch = useDispatch();

 

  if (isLoading) {
    return (
      <Loader />
    )
  }

 


 const handleDeleteDoctor = (id) => {
  dispatch(deleteDoctor(id));
  setRemoved(true);
}
 
  return (
    <div className='d-flex' >
      <SideMenu />
      <div className='d-flex vh-100 align-items-center bg-light justify-content-center flex-column  w-100' >
      
      <div className="doctors-container mb-3">
        <span className="doctor h2 bg-dark round p-2 mb-3" style={{color:"gold"}} >Choosse a Doctor to delete:</span>
      </div>

      <div className='d-flex flex-column gap-4 p-3 ' >
        {doctors.map((doctor) => (
          <div key={doctor.id} className='d-flex  gap-5 align-items-center justify-content-between px-3 py-4 shadow' >
            <div className='d-flex gap-3 align-items-center' >
              <h6>Name:</h6>      
              <h6>{doctor.name}</h6>                      
            </div>
            <div className='text-center' >
              <button
                onClick={() => dispatch(handleDeleteDoctor(doctor.id))}
                className='btn btn-danger'
                type="button"
              >
                {
                  removed ? 'Deleted' : 'Delete'
                }
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>


    
  );
}
