import React, { useState } from 'react';
import SideMenu from './side_menu';
import Corrousel from './corrousel';
import data from './doctor';

function Main_page() {
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
    <main className='d-flex flex-column'>
      <nav className='d-flex justify-content-between align-items-center mr-3 p-3 m-0 w-auto'>
        <a className="icon bg-black gap-12 mt-12 " onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
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

      <div className='d-flex flex-grow-1 check vh-100'>
        <SideMenu isMenuOpen={isMenuOpen} />
        <Corrousel />
      </div>
    </main>
  );
}

export default Main_page;
