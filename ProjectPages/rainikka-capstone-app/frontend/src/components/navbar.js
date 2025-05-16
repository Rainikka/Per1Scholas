import React from 'react';
import { Link } from 'react-router-dom';

/*** Navbar as Functonal Component ***/
const Navbar = () => {
  return (

    /*** Navbar Styling ***/
    < nav style={{
      padding: '10px',
      backgroundColor: '#b0c4de'
    }
    }>
      {/* Home Page Link */}
      < Link to="/" style={{ margin: '0 10px' }}> Home</Link >

      {/* Admin Page Link */}
      < Link to="/admin" style={{ margin: '0 10px' }}> Admin</Link >

      {/*  Dashboard 1 Link */}
      < Link to="/dashboard1" style={{ margin: '0 10px' }}> Dashboard 1</Link >

      {/* Dashboard 2 Link  */}
      < Link to="/dashboard2" style={{ margin: '0 10px' }}> Dashboard 2</Link >
    </nav >
  );
};

export default Navbar;