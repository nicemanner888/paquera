import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { Image } from 'semantic-ui-react';
import bottles from './images/bottles.png';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import hero from './images/hero-temp.jpg';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
  footerContent: {
    padding: theme.spacing(6, 0, 5),
  },
  footerText: {
    fontSize: 14,
  },
  footerText2: {
    fontSize: 16,
    fontWeight: 800,
    color: 'black',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    marginBottom: -15,
    marginLeft: -55,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <main style={{ backgroundColor: 'white' }}>
      
      <Divider />

        <div className={classes.footerContent}>
          <Container>
            <Grid 
                container
                direction="row"
                justify="center"
                spacing={6}
              >
              <Grid item xs={12} sm={4}>
                <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.footerText2}>
                  TO LEADING A LIFE FREE OF LABELS... CHEERS!
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.footerText}>
                  At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a community. Paquera is ethically produced by a group of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
                </Typography>
                <Icon className="fab fa-facebook" id="footer-icon"/>
                <Icon className="fab fa-instagram" id="footer-icon"/>
                <Icon className="fab fa-twitter-square" id="footer-icon"/>
                <Icon className="far fa-envelope" id="footer-icon"/>
                <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.footerText} style={{ paddingTop: '12px' }}>
                  © Paquera Mezcal 2020
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1} className="mobile-grid" />
              <Grid item xs={12} sm={2} position="center">
                <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.footerText2}>
                  MENU
                </Typography>
                <a href="/" className="footer-menu">
                  <p> Home </p>
                </a>
                <a href="/" className="footer-menu">
                  <p> Shop Online </p>
                </a>
                <a href="/" className="footer-menu">
                  <p> Read Our Blog </p>
                </a>
                <a href="/" className="footer-menu">
                  <p> Stockists </p>
                </a>
                <a href="/" className="footer-menu">
                  <p> Contact Us </p>
                </a>
              </Grid>
              <Grid item xs={12} sm={1} className="mobile-grid"/>
              <Grid item xs={12} sm={4}>
                <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.footerText2}>
                  NEWSLETTER
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph className={classes.footerText}>
                  Subscribe to receive updates, access to exclusive deals, and more.
                </Typography>
                <TextField className="footer-input" id="outlined-basic" label="Enter your email address" variant="outlined" style={{ width: '100%' }}/>
                <Button
                  variant="contained"
                  color="primary"
                  className={buttonClassname}
                  disabled={loading}
                  onClick={handleButtonClick}
                  style={{ marginTop: '15px' }}
                  id="footer-button"
                >
                  Submit
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              </Grid>
            </Grid>
          </Container>
        </div>
    </main>
  );
}