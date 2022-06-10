import React from "react";
import Typography from "@mui/material/Typography";

// Keep footer at bottom of page
const styles = {
  position: 'absolute',
  alignText: 'center',
  marginTop: '1.2rem',
  width: '100%',
  bottom: '1rem'
}

const Footer = () => {
  return (
    <div >
      <Typography style={styles} align="center" variant="body2" mt={5}>
        Developed by Gene, Jason, and Lindy.
      </Typography>
    </div>
  );
};

export default Footer;
