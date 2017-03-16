import React, { Component } from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
} from 'react-router';

import 'whatwg-fetch'

import {
  Topbar,
  Nav,
  CollapsibleNav,
} from 'amazeui-react';

import RouteLink from './components/RouteLink';
import SiteFooter from './components/SiteFooter';
import { myConfig } from './components/config.js';

class App extends Component {
  
  render() {
    var routeLinks = (
    myConfig.pages.map((page)=>{
        return (<RouteLink to="run" query = {{team:page.teamid}}>{page.des}</RouteLink>)
    })
    )
    return (
      <div className="ask-page">
        <Topbar
          className="ask-header"
          brand={myConfig.brand}
          brandLink="/"
          inverse
          toggleNavKey="nav"
        >
          <CollapsibleNav eventKey="nav">
            <Nav topbar>
              {routeLinks}
              
            </Nav>
          </CollapsibleNav>
        </Topbar>
        <main className="ask-main">
          {this.props.children}
        </main>
        <SiteFooter />
      </div>
    );
  }
}

function requireAuth(nextState, replace) {
  if (localStorage.refresh_token==undefined){
    console.log("您无权访问本页面")
      replace({
      pathname:'/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
  
}

// Pages
import Index from './pages/Index';
import Page1 from './pages/Page1';
import Login from './pages/Login'
import Logout from './pages/Logout'
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path = '/login' component = {Login}/>
      <Route path="run" component={Page1} />
      <Route path = '/logout' component = {Logout}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
