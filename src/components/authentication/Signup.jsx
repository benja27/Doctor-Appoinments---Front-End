import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signupUser } from '../../redux/currentUser/currentUserSlice';
import { Link } from 'react-router-dom';

const Signup = ({ setShow }) => {
  Signup.propTypes = {
    setShow: PropTypes.func.isRequired,
  };
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
      },

    };
    dispatch(signupUser(userInfo)).then(() => {
      window.location.reload();
    });
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className='flex-column vh-100 d-flex align-items-center justify-content-center ' >

      <div className='mb-3 px-4 py-4 border border-3 shadow col-10 col-md-8 col-lg-6' >
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='d-flex align-items-center gap-3 mb-4' >
            <h5 className='m-0' >Name:</h5>            
            {' '}
            <input type="text" className='form-control' name="name" placeholder="name" />
          </div>
          
          <div className='mb-4 d-flex align-items-center gap-3' >
          <h5 className='m-0' >Email:</h5>            
            
            {' '}
            <input className='form-control' type="email" name="email" placeholder="email" />
          </div>
          
          <div className='mb-4 d-flex align-items-center gap-3' >
          <h5 className='m-0' >Password:</h5>            
            
            {' '}
            <input className='form-control' type="password" name="password" placeholder="password" />
          </div>
          
          <div className='text-center' >
            <input className='btn btn-primary' type="submit" value="Signup" />
          </div>

        </form>
      </div>
      
      <div className='mb-3' >
        Already registered,
        {' '}        
        <Link className='' to={"/login"} >login</Link>
        {' '}
        here.
      </div>

      <div>
        <button type="button" className="btn btn-success">
          <Link className='text-white' to={"/"} >Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
