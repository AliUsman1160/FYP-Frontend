import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Connected from "./Pages/Connected";
import Home from "./Pages/Home";
import Locked from "./Pages/Locked";
import Sidebar from "./Sidebar";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box height={40} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Routes>
            <Route path="/Home" exact element={<Home />}></Route>
            {/* <Route path="/Screenshots" exact element={<Screenshots />}></Route> */}
            <Route path="/Screenshots" exact element={<h1>H</h1>}></Route>
            <Route path="/Settings" exact element={<Settings />}></Route>
            <Route path="/Notification" exact element={<h1>Hell</h1>}></Route>

            
            <Route
              path="/Connectedphones"
              exact
              element={<Connected />}
            ></Route>
            <Route path="/Lockedapps" exact element={<Locked />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}
