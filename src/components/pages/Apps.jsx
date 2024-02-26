import SettingsIcon from "@mui/icons-material/Settings";
import Box from '@mui/material/Box';
import React from 'react';
import Navbar from '../../assets/Navbar.jsx';
import "../../assets/Pages/style.css";
import Sidebar from '../../assets/Sidebar.jsx';

export default function Settings () {
  return (
    <div className="settings">
      <Navbar />
      <Box height={40} />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <div className="container-fluid mt-4">
      <div className="setting-head mt-2">
        <SettingsIcon
          style={{ fontSize: "xx-large" }}
          className="setting-icon"
        />
      </div>
      <hr />
      <div className="mb-5">
        <div className="acc-head">
          <h4>Account Settings</h4>
        </div>
        <div className="setting-account">
          <h6>Change Password</h6>
          <hr />
          <h6>Set Screenshot Time</h6>
          <hr />
          <h6>Other Settings</h6>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="mb-5">
        <div className="acc-head">
          <h4>Mobile Settings</h4>
        </div>
        <div className="setting-account">
          <h6>Change Mobile</h6>
          <hr />
          <h6>Delete Records</h6>
          <hr />
          <h6>Other Settings</h6>
        </div>
      </div>
    </div>
        </Box>

      </Box>
    </div>
  );
}
