import SideMenu from './SideMenu';
import Carousel from './Carousel';

function MainPage() {
  return (
    <div className="d-flex justify-content-between chec vh-100 chec">
      <SideMenu />
      <Carousel />
    </div>
  );
}

export default MainPage;
