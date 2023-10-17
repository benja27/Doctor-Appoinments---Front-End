import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Doctors</Link>
      </li>
      <li>
        <Link to="/add-doctor">Add Doctor</Link>
      </li>
      <li>
        <Link to="/delete-doctor">Remove Doctor</Link>
      </li>
      <li>
        <Link to="/appointments">My Appointments</Link>
      </li>
      <li>
        <Link to="/add-appointment">Add Appointment</Link>
      </li>
    </ul>
  </header>
);

export default Header;
