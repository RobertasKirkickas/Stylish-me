import React from 'react';
import logo from './bnr.png'; // import the header banner image
// import NavMenu from './NavMenu';
// import SuperLinks from './SuperLinks';

const Header = ({ isLoggedIn }) => {

  return (
    <header className="header">
      <div className="header-overlay">
        <h1 className="header-title">Stylish ME</h1>
        <div className='login-prompt'>
        {isLoggedIn  ? ( 
        <p>Welcome, user!</p>
      ) : (
        <p>Please sign in.</p>
      )}
        </div>
      </div>
      <img src={logo} className="header-logo" alt="logo" />

    </header>
    
  );
};

export default Header;
