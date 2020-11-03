import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@material-ui/core'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, red, yellow)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
    marginBottom: 15,
  },
  title: {
    flexGrow: 1,
  }
}))

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    }
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }} />
      }
      label='testing' />
  )
}

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton >
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>

            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>
              Learn how to use material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify='center'>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>


            <TextField
              variant='filled'
              type='email'
              label='e-mail'
              placeholder='email@email.com' />

            <CheckboxExample />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                variant='contained'
                color='primary'>
                Save
          </Button>
              <Button
                startIcon={<DeleteIcon />}
                variant='contained'
                color='secondary'>
                Delete
          </Button>
            </ButtonGroup>

            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
