import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../../firebase/db';
import { createUserProfile } from '../../firebase/db';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
  },
});

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
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
  submit: {
    minWidth: '140px',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: '',
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password1, password2 } = this.state;

    if (password1 !== password2) {
      alert('Passwords do not match');
      return;
    }

    try {
      // create user document => trigger authStateChange in App.js => triggers createUserProfile()
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password1
      );
      // calling createUserProfile here to store the display name
      await createUserProfile(user, { name });

      // clear form
      this.setState({
        name: '',
        email: '',
        password1: '',
        password2: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { name, email, password1, password2 } = this.state;
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction='column'
          alignItems='center'
          spacing={8}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Typography component='h1' variant='h5'>
                Create an account
              </Typography>

              <form
                className={classes.form}
                onSubmit={this.handleSubmit}
                noValidate
              >
                <Grid item>
                  <TextField
                    onChange={this.handleOnChange}
                    margin='normal'
                    required
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    autoComplete='name'
                    autoFocus
                    label='Name'
                    style={{ width: '20vw' }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={this.handleOnChange}
                    margin='normal'
                    required
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    autoFocus
                    label='Email'
                    style={{ width: '20vw' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={this.handleOnChange}
                    margin='normal'
                    required
                    name='password1'
                    label='Password'
                    type='password'
                    id='password1'
                    autoFocus
                    value={password1}
                    style={{ width: '20vw' }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={this.handleOnChange}
                    margin='normal'
                    required
                    id='password2'
                    name='password2'
                    value={password2}
                    type='password'
                    autoFocus
                    label='Confirm Password'
                    style={{ width: '20vw' }}
                  />
                </Grid>
                <Button
                  type='submit'
                  size='large'
                  color='primary'
                  variant='contained'
                  className={classes.submit}
                >
                  Create
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(useStyles)(Register);
