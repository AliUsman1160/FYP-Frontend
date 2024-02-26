import Box from '@mui/material/Box';
import React from 'react';
import Navbar from '../../assets/Navbar.jsx';
import "../../assets/Pages/style.css";
import Sidebar from '../../assets/Sidebar.jsx';
import avatar from '../../assets/extra/avatar.jpeg';
import avatar2 from '../../assets/extra/avatar2.jpeg';

export default function notification() {
    return (
        <>
            <Navbar />
            <Box height={40} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <div className="container-fluid notification-con mt-4">
      {/* <Box className="notification-con" component="main" sx={{ flexGrow: 1, p: 3 }}> */}
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="notification">
            <div className="notify">
              <img src={avatar} alt="" srcset="" />
              <h5>This is the notification about installing of a app</h5>
            </div>
            <div className="notitime">
              <h6 className>1:00 pm</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="notification">
            <div className="notify">
              <img src={avatar2} alt="" srcset="" />
              <h5>This is second notification</h5>
            </div>
            <div className="notitime">
              <h6 className>1:00 pm</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="notification">
            <div className="notify">
              <img src={avatar} alt="" srcset="" />
              <h5>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iste?</h5>
            </div>
            <div className="notitime">
              <h6 className>1:00 pm</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="notification">
            <div className="notify">
              <img src={avatar2} alt="" srcset="" />
              <h5>notification Lorem ipsum dolor sit amet consectetur.</h5>
            </div>
            <div className="notitime">
              <h6 className>1:00 pm</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="notification">
            <div className="notify">
              <img src={avatar} alt="" srcset="" />
              <h5>This is second notification</h5>
            </div>
            <div className="notitime">
              <h6 className>1:00 pm</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12">
          <div className="notification">
            <div className="notify">
              <img src={avatar} alt="" srcset="" />
              <h5>This is second notification</h5>
            </div>
            <div className="notitime">
              <h6 className>1:00 pm</h6>
            </div>
          </div>
        </div>
      </div>
      {/* </Box> */}
    </div>


                </Box>
            </Box>
        </>
    )
}
