import { useDispatch } from 'react-redux';
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
        <i className="fa-solid fa-right-from-bracket" />
      </btn>
    </section>
  );
};

export default Logout;
