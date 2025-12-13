// import { useState } from 'react'
import {AppBar, Box, Button} from "@mui/material";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./compotents/Navbar";

function App() {
  return (
    <Box sx={{height: '100vh'}}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </Box>
  );
}

export default App
