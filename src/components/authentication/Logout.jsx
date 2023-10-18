import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import { logout, logoutUser } from '../../redux/currentUser/currentUserSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    dispatch(logout());
    localStorage.removeItem('user');
  };
  return (

    <section>
      <btn onClick={handleClick} className="btn fw-bold" href="/">
        <h1 type="button" className="fw-bold h3">Logout</h1>
      </btn>
    </section>
  );
};

export default Logout;
