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
      <a href="/">
        <button type="button" onClick={handleClick} className="btn fw-bold">Logout</button>
      </a>
    </section>
  );
};

export default Logout;
