import SideMenu from './SideMenu';
import Corrousel from './Carousel';

function MainPage() {
  return (
    <div className="d-flex justify-content-between chec vh-100 chec">
      <SideMenu />
      <Corrousel />
    </div>
  );
}

export default MainPage;
