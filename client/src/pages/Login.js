import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card align="center" sx={{ border: 1, maxWidth: 275, mx: 'auto', mt: '2rem' }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" gutterBottom>Log In: </Typography>

            <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="email" variant="outlined"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange} />
              <TextField id="outlined-basic" label="password" variant="outlined"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange} />
            </Box>

          </CardContent>

          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="small" style={{ cursor: 'pointer' }} sx={{ mb: '1rem' }} type="submit" variant="outlined">Submit</Button>
          </CardActions>

        </Card>
      </form>
      {error && (
        <Alert severity="error" align="center" sx={{ border: 1, maxWidth: 275, mx: 'auto', mt: '2rem' }}>{error.message}</Alert>
      )}
    </>
  );

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
