import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, lightGreen } from "@material-ui/core/colors";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8eacbb",
      main: "#607d8b",
      dark: "#34515e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#e7ff8c",
      main: "#b2ff59",
      dark: "#7ecb20",
      contrastText: "#000"
    },
    openTitle: red["400"],
    protectedTitle: lightGreen["400"],
    type: "light"
  }
});

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
