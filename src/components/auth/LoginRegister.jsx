import React from 'react';
import Login from './Login';
import Register from './Register';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './login-register.styles.scss';

const LoginRegister = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      spacing={8}
      style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
        <Login />
      </Grid>

      <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
        <Register />
      </Grid>
    </Grid>
  );
};

export default LoginRegister;
