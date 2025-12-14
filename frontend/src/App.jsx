// import { useState } from 'react'
import {AppBar, Box, Button} from "@mui/material";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./compotents/Navbar";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";

function App() {

  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () => 
      createTheme({
        palette:{
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark": "light"));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box sx={{height: '100vh'}}>
          <NavBar toggleTheme={toggleTheme} mode={mode}/>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/create" element={<CreatePage />}></Route>
          </Routes>
        </Box>
    </ThemeProvider>
  );
}

export default App
