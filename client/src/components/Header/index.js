import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // navigate functions
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {Auth.loggedIn() ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/me">Expense Tracker</Link>
              </Typography>
              <Link to="/me" style={{ textDecoration: 'none', color: 'black'}}>
                <Button color="inherit" variant="contained"  sx={{ mx: "1rem" }}>
                  Profile
                </Button>
              </Link>
              <Button color="inherit" variant="contained" onClick={logout}  sx={{ mx: "1rem", color: 'black' }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Expense Tracker</Link>
              </Typography>
              <Link to="/login" style={{ textDecoration: 'none', color: 'black'}}>
                <Button color="inherit" variant="contained" sx={{ mx: "1rem" }}>
                  Login
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: 'none', color: 'black'}}>
                <Button color="inherit" variant="contained" sx={{ mx: "1rem" }}>
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      {location.pathname !== "/" && (
        <Button onClick={() => navigate(-1)}>&larr; Go Back</Button>
      )}
    </Box>
  );
};

export default Header;
