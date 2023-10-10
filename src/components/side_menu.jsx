import React, { useState } from 'react';
import doc from '../assets/image/doc1.jpg';

function SideMenu({ isMenuOpen }) {
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (index) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  const sideItems = [
    { text: 'Model', link: 'http://example.com' },
    { text: 'Specialization', link: 'http://example.com' },
    { text: 'Model', link: 'http://example.com' },
  ];

  return (
    <div className={`d-flex nav col justify-content-center align-items-center ${isMenuOpen ? 'open' : ''}`}>
      <div>
        <img src={doc} alt="" className='logo mt-5' />
      </div>
      <nav className='d-flex justify-content-center p-3'>
        <div className={`topnav d-flex flex-column align-items-center vh-100 w-lg-75 ${isMenuOpen ? 'show' : ''}`}>
          {isMenuOpen && (
            <ul className='menu justify-content-center mt-3 gap-6 m-0 p-0'>
              {sideItems.map((item, index) => (
                <li
                  key={index}
                  className={`side-item mt-3 m-4 text-center ${index === clickedItem ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <a href={item.link} className='text-decoration-none'>
                    <h4 className='m-3 px-3'>{item.text}</h4>
                  </a>
                </li>
              ))}
            </ul>
          )}
          {isMenuOpen && (
            <div className='d-flex row justify-content-center align-items-center mt-5 m-0 no-wrap'>
              <ul className='d-flex col justify-content-center align-content-center list-unstyled gap-3 m-0 p-0'>
                <li className='p-1'>
                  <i className='fa fa-twitter'>
                    <a href="http://twitter.com"></a>
                  </i>
                </li>
                <li className='p-1'>
                  <i className='fa fa-facebook'>
                    <a href="http://facebook.com.com"></a>
                  </i>
                </li>
                <li className='p-1'>
                  <i className='fa fa-linkedin'>
                    <a href="http://linkedin.com"></a>
                  </i>
                </li>
                <li className='p-1'>
                  <i className='fa fa-pinterest-square'>
                    <a href="http://pinterest.com"></a>
                  </i>
                </li>
              </ul>
              <p className='m-0 mt-2 text-center fs-5'>We care, but God Heals</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default SideMenu;
