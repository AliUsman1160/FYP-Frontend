import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sidebar from '../../assets/Sidebar.jsx';
import Navbar from '../../assets/Navbar.jsx';
import "../../assets/Pages/style.css";

import Bar from "../../assets/Charts/Barchart.jsx";
import Line from "../../assets/Charts/Linechart.jsx";
import { UserData } from "../../assets/Charts/data.js";

export default function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.application),
    datasets: [
      {
        label: "Time-Used(min)",
        data: UserData.map((data) => data.timeUsed),
      },
    ],
  });

  const [userlineData, setUserlineData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "ScreenTime per Day",
        data: UserData.map((data) => data.screentime),
      },
    ],
  });

  return (
    <div>
      <Navbar />
      <Box height={40} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="container-fluid chart-con mt-4">
            <div className="row mt-4">
              <div className="col-lg-4">
                <div class="card card-h">
                  <div class="card-inner">
                    <div class="card-front">
                      <p>Screen Time</p>
                    </div>
                    <div class="card-back">
                      <p>24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card card-h">
                  <div class="card-inner">
                    <div class="card-front">
                      <p>Average Usage per Day</p>
                    </div>
                    <div class="card-back">
                      <p>Some-info</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="card card-h">
                  <div class="card-inner">
                    <div class="card-front">
                      <p>Some Information</p>
                    </div>
                    <div class="card-back">
                      <p>Back Side</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row charts-con mt-4">
              <div className="col-xl-6 col-lg-6 mb-4 mt-4">
                <Bar chartdata={userData} />
              </div>
              <div className="col-xl-6 col-lg-6 mb-4 mt-4">
                <Line chartdata={userlineData} />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
