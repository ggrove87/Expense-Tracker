import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {Auth.loggedIn() ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/me">Expense Tracker</Link>
              </Typography>
              <Link to="/me">
                <Button color="inherit" variant="contained">
                  Profile
                </Button>
              </Link>
              <Button color="inherit" variant="contained" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Expense Tracker</Link>
              </Typography>
              <Link to="/login">
                <Button color="inherit" variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button color="inherit" variant="contained">
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
