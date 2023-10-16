import Side_menu from './side_menu';
import Carousel from './corrousel';

function MainPageIndex() {
  return (
    <div className="d-flex justify-content-between chec vh-100 chec">
      <Side_menu />
      {/* <Corrousel /> */}
      <Carousel />
    </div>
  );
}

export default MainPageIndex;
