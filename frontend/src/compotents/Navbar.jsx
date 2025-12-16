import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CiSquarePlus } from "react-icons/ci";
import Container from '@mui/material/Container';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function ButtonAppBar({toggleTheme, mode}) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Home</Button>
          </Typography>

          <Button color="inherit">
            <CiSquarePlus size="30px"/>
          </Button>

          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "light" ? (<MdDarkMode size="30px"/>) : (<MdOutlineLightMode size="30px"/>)}
          </IconButton>

        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
