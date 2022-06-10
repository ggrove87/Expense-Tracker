import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Card align="center" sx={{ border: 1, maxWidth: 275, mx: 'auto', mt: '2rem' }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" gutterBottom>Create an account:</Typography>

            <Box

              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="username" variant="outlined"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange} />
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
    </>
  );
};

export default Signup;
