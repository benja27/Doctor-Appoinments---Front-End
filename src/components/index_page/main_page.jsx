import Side_menu from './side_menu';
import Carousel from './corrousel';

function Main_page() {
  return (
    <div className="d-flex justify-content-between chec vh-100 chec">
      <Side_menu />
      {/* <Corrousel /> */}
      <Carousel />
    </div>
  );
}

export default Main_page;