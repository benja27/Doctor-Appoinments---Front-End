import BookForm from './appointments/AppointmentForm';

function SetAppoiment() {
  return (
    <div className="position-relative ">
      <div className="imagen-con-filtro position-absolut">
        <img src="https://picsum.photos/id/1/300/300" alt="Descripción de la imagen" />
      </div>
      <div className="info col-8 text-center">
        <h4 className="h3 mb-4 text-white">Set an Appoinment</h4>
        <h6 className="h6 text-white mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab soluta qui ea officia beatae eos. Iure adipisci ab voluptatibus ea incidunt nobis, atque commodi quam aspernatur odio. Obcaecati, veniam. </h6>
        <div className="d-flex mb-4 justify-content-center gap-4">
          <button className="btn btn-primary" type="button">Set Appoinment</button>

        </div>
      </div>

      <BookForm />
      {/* <Appointments /> */}
      {/* <DoctorsContainer /> */}

    </div>

  );
}

export default SetAppoiment;
