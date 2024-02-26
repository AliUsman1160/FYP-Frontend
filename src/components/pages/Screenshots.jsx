import Box from '@mui/material/Box';
import React from 'react';
import Navbar from '../../assets/Navbar.jsx';
import "../../assets/Pages/style.css";
import Sidebar from '../../assets/Sidebar.jsx';
import Card from '../../assets/extra/card-pic.jsx';

export default function Screenshots () {
  return (
    <div>
      <Navbar />
      <Box height={40} />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <div className="select-con">
          <h4>Select Device</h4>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select the Connected Device</option>
            <option value="1">Redmi Note 10</option>
            <option value="2">Redmi 10</option>
            <option value="3">Oppo F1S</option>
          </select>
        </div>
        
        <div className="pic-con">
            <div className="row">
              <div className="img-con col-lg-3 mt-2">
                <Card/>
              </div>
              <div className="img-con col-lg-3 mt-2">
                <Card/>
              </div>
              <div className="img-con col-lg-3 mt-2">
                <Card/>
              </div>
              <div className="img-con col-lg-3 mt-2">
                <Card/>
              </div>
              {/* <div className="img-con col-lg-4 mt-2">
                <Card/>
              </div>
              <div className="img-con col-lg-4 mt-2">
                <Card/>
              </div> */}
              
            </div>
          </div>
        </Box>

      </Box>
    </div>
  );
}
