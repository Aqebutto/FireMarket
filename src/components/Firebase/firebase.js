import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import * as ROUTES from "../../constants/routes";

const config = {
  apiKey: "AIzaSyDwRjedA_vwIvgKbQPAWSab3e7Z6YMN8r0",
  authDomain: "rf-web-shop.firebaseapp.com",
  databaseURL: "https://rf-web-shop.firebaseio.com",
  projectId: "rf-web-shop",
  storageBucket: "rf-web-shop.appspot.com",
  messagingSenderId: "17615506876"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.fieldValue = app.firestore.FieldValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firestore APIs */

    this.auth = app.auth();
    this.firestore = app.firestore();
    this.firestore.settings({
      timestampsInSnapshots: true
    });

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
    });

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        return this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** Message API ***

  message = uid => this.firestore.doc(`messages/${uid}`);

  messages = () => this.firestore.collection("messages");

  // Stripe API

  payments = () => this.firestore.collection("payments");

  subscriptions = () => this.firestore.collection("subscriptions");

  // *** User API ***

  user = uid => this.firestore.doc(`users/${uid}`);

  users = () => this.firestore.collection("users");
}

export default Firebase;