import React,  { useState } from "react"
import SideMenu from "./side_menu";
import data from './doctor';


function Nav () {
  const [searchItem, setSearchItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSarchInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const transit = filteredData.map((doc, index) => (
    <div className='doc' key={index}>
      <span className=''>{doc.name}</span>
      <span className=''>{doc.specialization}</span>
    </div>
  ));

  return (
   
    <div className='d-flex flex-column'>
         <nav className='d-flex justify-content-between align-items-center mr-3 p-2 m-0 w-auto'>
      <a className="icon bg-black gap-12 mt-12 " onClick={toggleMenu}>
        <i className={`fa ${isMenuOpen ? 'fa-times fa-2x' : 'fa-bars fa-2x'}`}></i>
      </a>
      <section className='mr-3'>
        <input
          type='text'
          placeholder='Search'
          className='search rounded none'
          value={searchItem}
          onChange={handleSarchInputChange}
        />
      </section>
    </nav>

    <div className='d-flex p-0 m-0'>
      <SideMenu isMenuOpen={isMenuOpen} className='w-auto' />
    </div>
  </div>
  );
};

export default Nav;