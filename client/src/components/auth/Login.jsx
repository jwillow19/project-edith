import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { googleSignInStart, emailSignInStart } from '../../redux/actions/user';
import { connect } from 'react-redux';
// import { loginWithEmailAndPassword } from '../../redux/actions/user';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#2962ff',
    },
  },
});

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    position: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkbox: {
    margin: '10px',
  },
  text: {
    fontWeight: '100',
  },
  submit: {
    minWidth: '200px',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Login = ({ classes, googleSignInStart, emailSignInStart }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formState;

  // NOTE: need to spread formState, then use object literal to update fields
  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  // render() {
  // const { email, password } = this.state;
  // const { classes, googleSignInStart } = this.props;
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction='column'
        alignItems='center'
        spacing={8}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>

            <form
              className={classes.form}
              onSubmit={(e) => handleSubmit(e)}
              noValidate
            >
              <Grid item>
                <TextField
                  onChange={(e) => handleOnChange(e)}
                  margin='normal'
                  required
                  id='email'
                  name='email'
                  value={email}
                  autoComplete='email'
                  autoFocus
                  fullWidth
                  label='Email'
                />
              </Grid>
              <Grid item>
                <TextField
                  onChange={(e) => handleOnChange(e)}
                  margin='normal'
                  required
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  value={password}
                  fullWidth
                  autoComplete='current-password'
                />
              </Grid>

              <div style={{ margin: '10px' }}></div>

              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />

              <Button
                type='submit'
                color='primary'
                variant='contained'
                className={classes.submit}
              >
                Sign In
              </Button>
              <Button
                color='secondary'
                variant='outlined'
                onClick={googleSignInStart}
                className={classes.submit}
              >
                Sign in with Google
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to='/' variant='body2'>
                    <p>Forgot password?</p>
                  </Link>
                </Grid>
                <Grid item xs>
                  <Link to='/register' variant='body2'>
                    <p className={classes.text}>Don't have an account?</p>
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
// }

// Login.propTypes = {
//   loginWithEmailAndPassword: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Login));
