import React from "react";
import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import Cart from "./Pages/Cart";
import {Nav, NavLink, Bars, NavList, NavButton, NavButtonLink} from "./Pages/styles/NavStyles";
// import ReactGA from "react-ga";

const Routes = () => {

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavList>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/beerlist" activeStyle>
            Beer List
          </NavLink>
          <NavButton>
            <NavButtonLink to="/cart" activeStyle>
              Cart
            </NavButtonLink>
          </NavButton>
        </NavList>
      </Nav>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return  <Redirect to="/home" />
          }}
          />
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  )
};

export default Routes;
