import React from "react";
import Typography from "@mui/material/Typography";

// Keep footer at bottom of page
const styles = {
  position: 'absolute',
  alignText: 'center',
  margin: '1.2rem',
  width: '100%'
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
