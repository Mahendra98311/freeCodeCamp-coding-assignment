import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const home = () => {
  return (
    <div className="just">
      <h2 className="just1">Learn to Code - for free.</h2>
      <h2 className="just2">Build projects.</h2>
      <h2 className="just3">Earn certifications.</h2>
      <h4 className="just4">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
      jobs at tech companies including:</h4>
      <div className="logo">
      <span className="logo1"><GoogleIcon/>GOOGLE</span>
      <span className="logo1"><AppleIcon/>APPLE</span>
      <span className="logo1">Microsft</span>
      <span className="logo1">Amazon.com</span>
      </div>
      
      <NavLink className="nav-link" to="/register">
        <button className="register"><h1>Get Started (It's Free)</h1></button>
      </NavLink>
    </div>
  )
}

export default home