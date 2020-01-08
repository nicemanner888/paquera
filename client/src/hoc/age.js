import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { cookies } from './cookies';
import logo from '../components/images/story-2.jpg';
import { Image } from 'semantic-ui-react';


const Allowance = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    if(cookies.get('verification') == 'yes') {
      window.location.href = "/";
    }
  });
  function handleClick(e: any) {
    if (e == 'no') {
      cookies.set('verification', 'no', { path: '/' });
      window.location.href = "https://google.com";
    }
    else {
      cookies.set('verification', 'yes', { path: '/' });
      window.location.href = "/";
    }
  }

  return (
    <Container maxWidth="lg" backgroundColor='black'>
      <Box m="12" alignItems="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <Image src={logo} width='400px' />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h3" component="h1" style={{ textAlign: 'center' }}>
            ARE YOU OF LEGAL DRINKING AGE?
          </Typography>
        </Grid> <br/>
        <Grid container item xs={12} justify="center" alignItems="center">
          <Button style={{ width: '100px', marginRight: '6px' }} variant="outlined" onClick={() => handleClick('yes')}>YES</Button>
          <Button style={{ width: '100px', marginLeft: '6px' }}variant="outlined"onClick={() => handleClick('no')}>NO</Button>
        </Grid>
      </Box>
    </Container>
  );
};
export default Allowance;