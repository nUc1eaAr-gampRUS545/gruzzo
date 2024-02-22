import React, { useState } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GiPlanetConquest } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div></div>
        <div className='none flex'>
          <li className='flex'>
            <BiSolidPhoneCall />
            Support
          </li>
          <li className='flex'>
            <GiPlanetConquest />
            Languages
          </li>
        </div>
        <div className='atb flex'>
          <span>Войти</span>
          <span>Выйти</span>
        </div>
      </div>
      <div className='navBarTwo flex'>
        <div className='logoDiv'>
          <img src={logo} className='Logo' alt='Logo' />
        </div>
        <div className={isMenuOpen ? 'navBarMenu showNavBar' : 'navBarMenu'}>
          <ul className='menu flex'>
            <li onClick={toggleMenu} className='listItem'>
              Home
            </li>
            <li onClick={toggleMenu} className='listItem'>
              About
            </li>
            <li onClick={toggleMenu} className='listItem'>
              Offers
            </li>
            <li onClick={toggleMenu} className='listItem'>
              Seats
            </li>
            <li onClick={toggleMenu} className='listItem'>
              Destinations
            </li>
          </ul>
          <button onClick={toggleMenu} className='btn flex btnOne'>
            Contact
          </button>
        </div>
        <div onClick={toggleMenu} className='toggleIcon'>
          <AiOutlineMenu className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
