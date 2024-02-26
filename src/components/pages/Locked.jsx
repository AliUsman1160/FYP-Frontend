import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sidebar from '../../assets/Sidebar.jsx';
import Navbar from '../../assets/Navbar.jsx';
import "../../assets/Pages/style.css";
export default function Locked () {
  return (
    <div>
      <Navbar />
      <Box height={40} />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <h1>Locked Devices</h1>
        </Box>

      </Box>
    </div>
  );
}
