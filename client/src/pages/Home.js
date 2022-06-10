import React from "react";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <main>
      <Typography align="center" variant="h6" my={5}>
        Welcome to the Expense Tracker, where monitoring home-project budgets is
        made easy.
      </Typography>
      <div align="center">
        <iframe title="kevin" src="https://giphy.com/embed/SEWEmCymjv8XDbsb8I" style={{ maxWidth: "400vw", height: 'auto' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
    </main>
  );
};

export default Home;
