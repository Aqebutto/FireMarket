import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";

import { Link, withRouter } from "react-router-dom";
import CartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { AuthUserContext } from "../Session";

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "##e29e0b" };
  else return { color: "#4286f4" };
};
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path)) return { color: "#bef67a" };
  else return { color: "#ffffff" };
};

const Menu = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => <p>oNav Auth</p>;

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
          <Button style={isActive(history, "/shops/all")}>All Shops</Button>
        </Link>
      </div>
      <div style={{ position: "absolute", right: "10px" }}>
        <span style={{ float: "right" }} />
      </div>
    </Toolbar>
  </AppBar>
));

export default Menu;
