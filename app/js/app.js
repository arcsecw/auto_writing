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
        >
          <CollapsibleNav>
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

// Pages
import Index from './pages/Index';
import Page1 from './pages/Page1';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="run" component={Page1} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
