import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home';
import Login from './components/Login';
import Menu from './components/Menu';
import Register from './components/Register';
import Courses from './components/Courses';





const App = () => {

//const UserContext = createContext();

  return (
    <div>
   {/* <UserContext> */}
      <Navbar/>      
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
        <Route path='/menu' element={<Menu/>}/>
        </Routes>
        <Routes>
         <Route path='/login' element={<Login/>}/>
        </Routes>
        <Routes>
         <Route path='/register' element={<Register/>}/>
        </Routes>
        <Routes>
         <Route path='/courses' element={<Courses/>}/>
        </Routes>
       {/* </UserContext>    */}
          
        
      
     
    </div>
  )
}

export default App