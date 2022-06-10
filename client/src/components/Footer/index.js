import React from "react";
import Typography from "@mui/material/Typography";

// Keep footer at bottom of page
const styles = {
  position: 'absolute',
  left: 0,
  bottom: '1.2rem',
  right: 0
}

const Footer = () => {
  return (
    <>
      <Typography style={styles} align="center" variant="body2" mt={5}>
        Developed by Gene, Jason, and Lindy.
      </Typography>
    </>
  );
};

export default Footer;
