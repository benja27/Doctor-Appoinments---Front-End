import { useDispatch } from 'react-redux';
import { logout, logoutUser } from '../../redux/currentUser/currentUserSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    dispatch(logout())
    localStorage.removeItem('user');
   
  };
  return (
    
    
  // <input type="submit" value="Logout" className='bg-transparent border border-0 h4 fw-bold' onClick={handleClick} />
    
    
  <section>
    <a href="/">
      <h4 onClick={handleClick} className="h4 fw-bold">Logout</h4>
    </a>
  </section>
  );
};

export default Logout;
