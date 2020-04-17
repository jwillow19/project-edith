import React from 'react';
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
  submit: {
    minWidth: '140px',
    margin: 'auto',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
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
                Sign in
              </Typography>

              <form className={classes.form} noValidate>
                <Grid item>
                  <TextField
                    onChange={this.handleOnChange}
                    margin='normal'
                    required
                    id='email'
                    name='email'
                    value={email}
                    autoComplete='email'
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
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    value={password}
                    autoComplete='current-password'
                    style={{ width: '20vw' }}
                  />
                </Grid>

                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
                <Button
                  type='submit'
                  size='large'
                  color='primary'
                  variant='contained'
                  //   fullWidth
                  onSubmit={this.handleSubmit}
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to='/' variant='body2'>
                      <h className='text'>Forgot password?</h>
                    </Link>
                  </Grid>
                  <Grid item xs>
                    <Link to='/register' variant='body2'>
                      Don't have an account?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(useStyles)(Login);
