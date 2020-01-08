import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout';
import Age from './hoc/age';
import { cookies } from './hoc/cookies';


class Routes extends Component {
	render() {
		console.log(cookies.get('verification'));
    if (cookies.get('verification') == 'yes') {
    return (
	    <Switch>
	      <Route exact path="/" component={Layout}  />
	      <Route otherwise component={Layout}  />
	  	</Switch>
	  );
	}
	else {
		return (
      <Switch>
	      <Route exact path="/" component={Age} />
	      <Route otherwise component={Age}  />
	  	</Switch>
			);
		}
	}
}

export default Routes;

