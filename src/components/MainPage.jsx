import SideMenu from './SideMenu';
import Carousel from './Carousel';

function MainPage({ user}) {
  return (
    <div className="d-flex justify-content-between chec vh-100 chec">
      <SideMenu />
      <Carousel user={user}/>
    </div>
  );
}

export default MainPage;
