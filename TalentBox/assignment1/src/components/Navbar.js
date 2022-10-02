import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";


function Navbar() {
  let use = JSON.parse(localStorage.getItem('user-info'))
  

  
  return (
    <div className="justify-content-between">
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">                 
                 <form className="form-inline my-2 my-lg-0 ">
                     <input className="form-control mr-sm-2" type="search" placeholder="Search8,000+tutorials" aria-label="Search"/>
                 </form>
                    
                 <NavLink className="navbar-brand" to="/">
                  <img src={logo} alt="logo" height="36"/>
                 </NavLink>
                                       
                <ul className="navbar-nav ">
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/menu">
                         <button type="button" className="btn btn-outline-light btn-sm">Menu</button>
                         </NavLink>
                     </li>
                     <li className="nav-item">
                         <NavLink className="nav-link" to="/Login">
                         <button type="button" className="btn btn-warning btn-sm">
                         Sign In</button>
                         </NavLink>
                         <li className="nav-item">
                         
                     </li>
                     </li>
                </ul>
                           
                
                        
                    
        </nav>
    </div>
  )
} 
export default Navbar

