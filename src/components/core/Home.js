import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Suggestions from "./../product/Suggestions";
import Search from "./../product/Search";
import Categories from "./../product/Categories";
import { withFirebase } from "../Firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30
  }
});

class Home extends Component {
  state = {
    suggestionTitle: "Latest Products",
    suggestions: [],
    categories: []
  };
  componentDidMount = () => {
    this.props.firebase.listLatest().then(querySnapshot => {
      if (querySnapshot.error) {
        console.log(querySnapshot.error);
      } else {
        const data = querySnapshot.docs.map(snap => {
          return snap.data();
        });
        console.log("Products", data);
        this.setState({ suggestions: data });
      }
    });
    this.props.firebase.listCategories().then(querySnapshot => {
      if (querySnapshot.error) {
        console.log(querySnapshot.error);
      } else {
        const data = querySnapshot.docs.map(snap => {
          return snap.data().name;
        });
        console.log("Catagories: ", data);
        this.setState({ categories: data });
      }
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={8} sm={8}>
            <Search categories={this.state.categories} />
            <Categories categories={this.state.categories} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <Suggestions
              products={this.state.suggestions}
              title={this.state.suggestionTitle}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withFirebase(withStyles(styles)(Home));
