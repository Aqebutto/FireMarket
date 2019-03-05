# FirestoreStripeSemantic made in React

## Features

- uses:
  - only React (create-react-app)
  - firebase
  - react-router
  - semantic UI
  - **stripe**
  - **firebase funtions create charge / create subscribtion**
- features:
  - Sign In
  - Sign Up
  - Sign Out
  - Password Forget
  - Password Change
  - Verification Email
  - Protected Routes with Authorization
  - Roles-based Authorization
  - Social Logins with Google, Facebook and Twitter
  - Linking of Social Logins on Account dashboard
  - Auth Persistence with Local Storage
  - Database with Users, Messages, Payments (Stripe token data) and Subscribtions
  - Donate (Create stripe charge)
  - Subscribe Monthly with Stripe

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use this starter project under the terms of the GPLv3.

## Contributors

- [John Muteti (iamuteti)](https://github.com/iamuteti)
- [Robin Wieruch (rwieruch)](https://github.com/rwieruch)

## Installation

- `git clone https://github.com/Aqebutto/FirestoreStripeSemantic-Boilerplate.git`
- `cd FirestoreStripeSemantic`
- `npm install`

- `cd functions`
- `npm install`
- `firebase functions:config:set stripe.testkey="YOUR_STRIPE_TEST_KEY"`
-  Then verify it worked `firebase functions:config:get`
- `firebase deploy`

- `npm start`
- visit http://localhost:3000

### Firebase Configuration

- copy/paste your configuration from your Firebase project's dashboard into one of these files
  - _src/components/Firebase/firebase.js_ file
  - _.env_ file
  - _.env.development_ and _.env.production_ files

The _.env_ or _.env.development_ and _.env.production_ files could look like the following then:

```
REACT_APP_API_KEY=AIzaSyBtxZ3phPeXcsZsRTySIXa7n33NtQ
REACT_APP_AUTH_DOMAIN=react-firebase-s2233d64f8.firebaseapp.com
REACT_APP_DATABASE_URL=https://react-firebase-s2233d64f8.firebaseio.com
REACT_APP_PROJECT_ID=react-firebase-s2233d64f8
REACT_APP_STORAGE_BUCKET=react-firebase-s2233d64f8.appspot.com
REACT_APP_MESSAGING_SENDER_ID=701928454501
```

### Stripe Configuration
- copy/paste your public stripe key into - _src/components/constants/stripe.js_ file
- Your secret key was set after installing node modules in functions folder with `firebase functions:config:set stripe.testkey="YOUR_STRIPE_TEST_KEY"`
### Activate Sign-In Methods

![firebase-enable-google-social-login_640](https://user-images.githubusercontent.com/2479967/49687774-e0a31e80-fb42-11e8-9d8a-4b4c794134e6.jpg)

### Activate Verification E-Mail

- add a redirect URL for redirecting a user after an email verification into one of these files
  - _src/components/Firebase/firebase.js_ file
  - _.env_ file
  - _.env.development_ and _.env.production_ files

The _.env_ or _.env.development_ and _.env.production_ files could look like the following then (excl. the Firebase configuration).

**Development:**

```
REACT_APP_CONFIRMATION_EMAIL_REDIRECT=http://localhost:3000
```

**Production:**

```
REACT_APP_CONFIRMATION_EMAIL_REDIRECT=https://mydomain.com
```
