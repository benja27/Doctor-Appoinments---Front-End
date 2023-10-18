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

export default MainPage;
