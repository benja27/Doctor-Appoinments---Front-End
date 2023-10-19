import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import SideMenu from './SideMenu';
import Loader from './index_page/Loader';

function Show() {
  const { doctors, isLoading, selectedDoctor } = useSelector(
    (state) => state.doctors,
  );

  const doctor = doctors.find((doctor) => doctor.id === selectedDoctor);

  if (isLoading) {
    return <Loader />;
  }

  if (doctor) {
    return (
      <div className="d-flex " style={{ overflowY: 'hidden', height: '100vh' }}>
        <SideMenu />

        <div className="d-flex w-100 bg-ligh show_cont">

          <div className="vh-10 show_cont_img col-md-8 col-12">

            <div className="d-flex flex-column align-items-center justify-content-center vh-100 ">

              <Tilt
                className="col-8 "
                style={{ borderRadius: '50%', overflowX: 'hidden', backgroundColor: '#E2E3E5' }}
              >
                <img
                  style={{ width: '100%' }}
                  src={
                    /^https:\/\//.test(doctor.photo) ? doctor.photo : 'https://i.pinimg.com/564x/39/97/b8/3997b837ba0548ec1a5430ee31fb43aa.jpg'
                  }
                  alt="of a doctor"
                />
              </Tilt>

              <div className="w-100 mt-5">
                <div className="mt-5">
                  <Link
                    style={{ backgroundColor: '#0FC00F', zIndex: '1000', position: 'sticky' }}
                    className=" d-flex justify-content-center align-items-center col-2 py-2 arrow left-arrow px-2"
                    to="/"
                  >
                    {' '}
                    <span className="h5 m-0 arro">back</span>
                    {' '}
                  </Link>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-succes show_img_info col-md-4 col-12 mt-md-5" style={{ overflow: 'hidden' }}>
            <div className="d-flex bg-succes align-items-center justify-content-cente flex-column vh-100 ">

              <div className="col-10 col-md-10 mt-md-5">
                <div className="d-flex h2 justify-content-end gap-3 mb-1 px-2 mb-4">
                  {' '}
                  <span>
                    {' '}
                    Dr.
                    {doctor.name}
                  </span>
                  {' '}
                </div>

                <div style={{ backgroundColor: '#E2E3E5' }} className="d-flex py-2 px-2 rounded justify-content-between gap-3">
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
                  <span> Photo  </span>
                  {' '}
                  <span className="d-none">
                    {' '}
                    {doctor.photo}
                    {' '}
                  </span>
                  <span>verified : ✅</span>
                  {' '}
                </div>
                <div style={{ backgroundColor: '#E2E3E5' }} className="d-flex py-2 px-2 rounded justify-content-between gap-3">
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

              <div className="col-10 col-md-10 mt-4">
                <span className="fw-bold px-2">5.9% success ratio</span>
              </div>

              <div className="d-flex justify-content-end col-10 pt-4">
                <span className="h6 fw-bold " style={{ fontSize: '10px' }}>
                  DISCOVER MORE DOCTORS
                </span>
              </div>

              <div className="col-10 d-flex justify-content-end mt-3">
                <img
                  src="https://s1.significados.com/foto/20fc-ryb-circulo-cromatico.png"
                  alt=""
                  className="col-6 mt-4"
                  style={{ idth: '100%' }}
                />
              </div>

              <div className="col-10 text-end me-5 mt-5">
                <Link
                  style={{ backgroundColor: '#0FC00F' }}
                  className="btn btn-large text-white rounded"
                  to="/set_appoinment"
                >
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
