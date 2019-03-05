import React, { Component } from "react";
import { Grid, Card, Header, Message, Form, Button } from "semantic-ui-react";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Grid columns={1}>
        <Grid.Column>
          <h1>Change me</h1>
          <p>
            Donate Starter Plate with Firebase Auth, Firestore NoSQL, Firebase
            Functions Serverless backend, Stripe
          </p>
          <hr />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Landing;
