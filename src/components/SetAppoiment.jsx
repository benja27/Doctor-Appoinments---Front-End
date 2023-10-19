import FullBookForm from './appointments/FullAppointmentForm';
import docImg from '../assets/image/doc1.jpeg';

function SetAppoiment() {
  return (
    <div className="position-relative">
      <div className="imagen-con-filtro position-absolut vh-100">
        <img className="vh-100" style={{ objectFit: 'cover' }} src={`${docImg}`} alt="Descripción de la imagen" />
      </div>

      <FullBookForm />

    </div>

  );
}

export default SetAppoiment;
