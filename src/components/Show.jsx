import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import SideMenu from './SideMenu';

function Show() {
 
  const { doctorId } = useParams();

  
  const {doctors, isLoading} = useSelector((state) => state.doctors);
  

  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId, 10));

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


 

  if (doctor) {
    return (
      <div className="d-flex" style={{ overflowY: 'hidden', height: '100vh' }}>
        <SideMenu />

        <div className="d-flex justify-content-strech w-100 bg-light">

          <div className="bg-primar vh-100 col-8 ">

            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
              <div>
                <img src="https://picsum.photos/id/1/200/200" alt="" />
              </div>

              <div className="w-100 mt-5">
                <div className="mt-5">
                  
                  <Link className="bg-success d-block col-2 py-2 arrow left-arrow px-2" to="/">
                    {' '}
                    <span className="h5">back</span>
                    {' '}
                  </Link>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-succes col-4 mt-5">

            <div className="d-flex bg-succes align-items-center justify-content-cente flex-column vh-100 mt-5">

              <div className="col-10 col-md-10 mt-5">
                <div className="d-flex h2 justify-content-end gap-3 mb-1 px-2 ">
                  {' '}
                  <span>
                    {' '}
                    {doctor.name}
                    {' '}
                  </span>
                  {' '}
                </div>
                <div className="d-flex h6 justify-content-end gap-3 mb-4 px-2 ">
                  {' '}
                  <span>
                    {' '}
                    {doctor.name}
                    {' '}
                  </span>
                  {' '}
                </div>

                <div className="d-flex py-2 px-2 rounded justify-content-between gap-3 bg-secondary">
                  {' '}
                  <span> Consultation fee </span>
                  {' '}
                  <span>
                    {' '}
                    {doctor.consultation_fee}
                    {' '}
                  </span>
                  {' '}
                </div>
                <div className="d-flex py-2 px-2 rounded justify-content-between gap-3">
                  {' '}
                  <span> Photo </span>
                  {' '}
                  <span>
                    {' '}
                    {doctor.photo}
                    {' '}
                  </span>
                  {' '}
                </div>
                <div className="d-flex py-2 px-2 rounded justify-content-between gap-3 bg-secondary">
                  {' '}
                  <span> Prescription fee </span>
                  {' '}
                  <span>
                    {' '}
                    {doctor.prescription_fee}
                    {' '}
                  </span>
                  {' '}
                </div>
                <div className="d-flex py-2 px-2 rounded justify-content-between gap-3">
                  {' '}
                  <span> Specialization </span>
                  {' '}
                  <span>
                    {' '}
                    {doctor.specialization}
                    {' '}
                  </span>
                  {' '}
                </div>
              </div>

              <div className="col-10 col-md-10">
                <span className="fw-bold px-2">5.9% success ratio</span>
              </div>

              <div className="d-flex justify-content-end col-10 pt-4">
                <span className="h6 fw-bold " style={{ fontSize: '10px' }}>DISCOVER MORE DOCTORS</span>
              </div>

              <div className="col-10 d-flex justify-content-end mt-3">
                <img src="https://s1.significados.com/foto/20fc-ryb-circulo-cromatico.png" alt="" className="col-4" style={{ idth: '100%' }} />
              </div>

              <div className="col-10 text-end me-5 mt-5">

                <Link className="btn btn-large btn-success rounded" to="/set_appoinment">
                  {' '}
                  <span className="h5">Book appoinment</span>
                  {' '}
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Show;
