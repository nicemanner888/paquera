import React from 'react';
import PersistentDrawerRight from './navbarMain';
import Container from '@material-ui/core/Container';
import Footer from './footer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 3),
  },
  mapContent: {
  	padding: theme.spacing(12, 0, 12),
  },
}));

export default function Stockists() {
  const classes = useStyles();

  return (
	  <main style={{ backgroundColor: 'white' }}>
		<PersistentDrawerRight />

	  <div className={classes.heroContent}>
      <Divider className="mobile-divider" />
      <Container >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ paddingTop: '39px' }}>
          Stockists
        </Typography>
      </Container>
    </div>


    <Divider />

		<Container className={classes.mapContent}>
      <Container>
  		  <div id='storerocket-widget' data-storerocket-filters='' data-storerocket-env='p' data-storerocket-id='5Ax86Kapy1' />
      </Container>
		</Container>

		<Footer/>
	</main>
  );
}