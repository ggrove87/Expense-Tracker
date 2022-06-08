import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname !== "/" && (
        <Button onClick={() => navigate(-1)}>&larr; Go Back</Button>
      )}
      <Typography align="center" variant="body2" mt={5}>
        Developed by Gene, Jason, and Lindy.
      </Typography>
    </>
  );
};

export default Footer;
