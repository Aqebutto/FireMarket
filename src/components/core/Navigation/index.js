import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";

import { Link, withRouter } from "react-router-dom";
/* import CartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge"; */
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#fc7223" };
  else return { color: "#fcd471" };
};
/* const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path)) return { color: "#bef67a" };
  else return { color: "#ffffff" };
}; */

const Menu = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        Fire Market
      </Typography>
      <div>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/shops/all">
          <Button style={isActive(history, "/shops/all")}>Shop</Button>
        </Link>
      </div>
      <div style={{ position: "absolute", right: "10px" }}>
        <span style={{ float: "right" }}>
          <SignOutButton />
        </span>
      </div>
    </Toolbar>
  </AppBar>
));

const NavigationNonAuth = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        Fire Market
      </Typography>
      <div>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link to="/shops/all">
          <Button style={isActive(history, "/shops/all")}>Shop</Button>
        </Link>
      </div>
      <div style={{ position: "absolute", right: "10px" }}>
        <span style={{ float: "right" }}>
          <Link to={ROUTES.SIGN_UP}>
            <Button style={isActive(history, ROUTES.SIGN_UP)}>Sign up</Button>
          </Link>
          <Link to={ROUTES.SIGN_IN}>
            <Button style={isActive(history, ROUTES.SIGN_IN)}>Sign In</Button>
          </Link>
        </span>
      </div>
    </Toolbar>
  </AppBar>
));

export default Menu;
