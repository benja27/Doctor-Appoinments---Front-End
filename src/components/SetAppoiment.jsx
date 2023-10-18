import FullBookForm from './appointments/FullAppointmentForm';
// import SideMenu from './SideMenu';

function SetAppoiment() {
  return (
    <div className="position-relative">
      <div className="imagen-con-filtro position-absolut ">
        <img src="https://picsum.photos/id/1/300/300" alt="Descripción de la imagen" />
      </div>

      <FullBookForm />

    </div>

  );
}

export default SetAppoiment;
