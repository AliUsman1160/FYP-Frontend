import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Codeverfication from './components/Login/Codeverfication';
import Login from './components/Login/Login';
import Setnewpassword from './components/Login/Setnewpassword';
import PrivateCompnent from './components/PrivateCompnent';
import Apps from './components/pages/Apps';
import Connected from './components/pages/Connected';
import Home from './components/pages/Home';
import Locked from './components/pages/Locked';
import Screenshots from './components/pages/Screenshots';
import Notification from "./components/pages/notification";
export default function App () {
  return(
    <>
      
      <BrowserRouter>
        <Routes>
         <Route path='/' exact element={<Login/>}></Route> 
         <Route path='/code' exact element={<Codeverfication/>}></Route> 
         <Route path='/forgetpassword' exact element={<Codeverfication/>}></Route> 
         <Route path='/setpassword' exact element={<Setnewpassword/>}></Route> 

         <Route element={<PrivateCompnent />} >
            <Route path='/Home' exact element={<Home/>}></Route> 
            <Route path='/Screenshots' exact element={<Screenshots/>}></Route> 
            <Route path='/Notification' exact element={<Notification/>}></Route> 
            <Route path='/Apps' exact element={<Apps/>}></Route> 
            <Route path='/Connectedphones' exact element={<Connected/>}></Route> 
            <Route path='/Lockedapps' exact element={<Locked/>}></Route> 
         </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
