import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data, reset }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setTimeout(() => {
        reset();
      }, 2000);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card
          align="center"
          sx={{ border: 1, maxWidth: 275, mx: "auto", mt: "2rem" }}
        >
          <CardContent>
            <Typography color="text.secondary" variant="h5" gutterBottom>
              Log In:{" "}
            </Typography>

            <Box
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="email"
                variant="outlined"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <TextField
                label="password"
                variant="outlined"
                name="password"
                type="password"
                autoComplete="on"
                value={formState.password}
                onChange={handleChange}
              />
            </Box>
          </CardContent>

          <CardActions style={{ justifyContent: "center" }}>
            <Button
              size="small"
              style={{ cursor: "pointer" }}
              sx={{ mb: "1rem" }}
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
      {error && (
        <Alert
          severity="error"
          align="center"
          sx={{ border: 1, maxWidth: 275, mx: "auto", mt: "2rem" }}
        >
          {error.message}
        </Alert>
      )}
    </>
  );
};

export default Login;
