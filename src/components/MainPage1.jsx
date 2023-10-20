import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import Carousel from './Carousel';

function MainPage({ user }) {
  return (
    <div className="d-flex justify-content-between vh-100">
      <SideMenu />
      <Carousel user={user} />
    </div>
  );
}

MainPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainPage;
