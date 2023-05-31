import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];
  const navigate = useNavigate();

  const goToLogin = () => {
    if (!authenticate) {
      navigate('/login');
    } else {
      setAuthenticate(false);
    }
  };
    const search = (event) => {
     if (event.key === "Enter") 
     {let keyword = event.target.value
     navigate(`/?q=${keyword}`) 
     }
    }

  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate == false ? '로그인' : '로그아웃'}</div>
        </div>
      </div>

      <a href='/' className='nav-section'>
        <img
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'
          alt='H&M Logo'
        />
      </a>

      <div className='menu-area'>
        <ul className='menuList'>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className='search-bar'>
          <FontAwesomeIcon className='search-icon' icon={faSearch} />
          <input className='search-input' type='text' onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
