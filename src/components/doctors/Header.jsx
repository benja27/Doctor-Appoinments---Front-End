import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Doctors</Link>
        </li>
        <li>
          <Link to="/add-doctor">Add Doctor</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;