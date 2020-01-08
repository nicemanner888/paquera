import { GlobalContext } from "../store";
import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import clsx from 'clsx';
import './main.css';
import { loadCSS } from 'fg-loadcss';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExploreOutlinedIcon from '@material-ui/icons/Explore';
import Container from '@material-ui/core/Container';
import logo from './images/logo.png';
import { Image } from 'semantic-ui-react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TurnedInNotSharpIcon from '@material-ui/icons/BookmarkSharp';
import StorefrontSharpIcon from '@material-ui/icons/StorefrontSharp';
import TimelineSharpIcon from '@material-ui/icons/TimelineSharp';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCart';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpSharp';
import SendOutlinedIcon from '@material-ui/icons/Send';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import HomeOutlinedIcon from '@material-ui/icons/Home';
import ChangeHistorySharpIcon from '@material-ui/icons/ChangeHistorySharp';
import Grid from '@material-ui/core/Grid';
import DashboardOutlinedIcon from '@material-ui/icons/Dashboard';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBar';
import InfoOutlinedIcon from '@material-ui/icons/Info';


const drawerWidth = 330;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: 39,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


const ButtonAppBar = ({ handleClickButton, match, history }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [state, dispatch] = useContext(GlobalContext);
  const blogs = state.pages.data.map(blog => {
    return {
      title: blog.title,
      image: blog.featured_image,
      slug: blog.slug
    };
  });

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [choce, notChoce] = React.useState(false);
  const [choce2, notChoce2] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    notChoce(!choce);
  };

  const handleClick2 = () => {
    notChoce2(!choce2);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const handleResultSelect = (e, { result }) => {
    setValue("");
    history.push(`/blog/${result.slug}`);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  let [pos, setPos] = useState(window.pageYOffset)
    let [visible, setVisible] = useState(true)
     
    useEffect(()=> {
      const handleScroll = () => {
        let temp = window.pageYOffset
           
        setVisible(pos > temp);
        setPos(temp)
      };

      window.addEventListener("scroll", handleScroll);
        return(() => {
          window.removeEventListener("scroll", handleScroll);
        })
     })

  return (
    <div className={classes.root}>
      <CssBaseline />
        <ElevationScroll>
          <AppBar
            position="fixed"
            className="{clsx(classes.appBar)}"
            style={{ backgroundColor: 'white' }}
          >
          <Container fluid>
            <Toolbar>

              <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
              <Grid item xs={12} sm={6}>
                <IconButton
                  color="black"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}  
                  id="nav-icon"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Typography variant="h1" className={classes.title} id="nav-text">
                  PAQUERA MEZCAL
                </Typography>
              </Grid>
            </Grid>
            </Toolbar>
          </Container>
          </AppBar>
        </ElevationScroll>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="fadeInLeft"
        >

        <a href="/" id="drawer-text">
          <ListItem button className="animated fadeInLeft">
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" id='drawer-text' />
          </ListItem>
        </a>

            <a href="/shop/">
              <ListItem button className="animated fadeInLeft">
                <ListItemIcon>
                  <ShoppingCartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Shop Paquera" style={{ color: '#323232' }}/>
              </ListItem>
            </a>

            <a href="/oaxaca-process/">
              <ListItem button className="animated fadeInLeft">
                <ListItemIcon>
                  <TimelineSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Oaxaca Process" style={{ color: '#323232' }}/>
              </ListItem>
            </a>

            <a href="/story/">
              <ListItem button className="animated fadeInLeft">
                <ListItemIcon>
                  <TurnedInNotSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Story" style={{ color: '#323232' }}/>
              </ListItem>
            </a>

          <a href="/stockists/">
            <ListItem button className="animated fadeInLeft">
              <ListItemIcon>
                <ExploreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Stockists" style={{ color: '#323232' }}/>
            </ListItem>
          </a>

          <ListItem button onClick={handleClick2} className="animated fadeInLeft">
            <ListItemIcon>
              <LibraryBooksSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
            {choce2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={choce2} timeout="auto" unmountOnExit>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <a href="/blog/">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <DashboardOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="All Articles" style={{ color: '#323232' }}/>
                </ListItem>
              </a>
              <a href="/blog/cocktails/">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <LocalBarOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cocktails" style={{ color: '#323232' }}/>
                </ListItem>
              </a>
              <a href="/blog/about/">
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <InfoOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="About Paquera" style={{ color: '#323232' }}/>
                </ListItem>
              </a>
            </List>
          </Collapse>

          <a href="/story/">
            <ListItem button className="animated fadeInLeft">
              <ListItemIcon>
                <SendOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contact"  style={{ color: '#323232' }}/>
            </ListItem>
          </a>

        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(ButtonAppBar);