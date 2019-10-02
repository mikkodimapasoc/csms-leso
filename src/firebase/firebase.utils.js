import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore;
  }

  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  logoutUser = () => {
    this.auth.signOut();
  };
  // // adds user to the user database
  // createUserProfileDocument = async (userAuth, additionalData) => {
  //   if (!userAuth) return;
  //   const userRef = this.db.doc(`users/${userAuth.uid}`);
  //   const snapShot = await userRef.get();

  //   if (!snapShot.exists) {
  //     const { email } = userAuth;
  //     const createdAt = new Date();

  //     try {
  //       await userRef.set({
  //         email,
  //         createdAt,
  //         ...additionalData
  //       });
  //     } catch (error) {
  //       console.log('error creating user', error.message);
  //     }
  //   }
  //   return userRef;
  // };
  passswordReset = email => this.auth.sendPasswordResetEmail(email);
  changePassword = password => this.auth.currentUser.updatePassword(password);
  registerUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
}

export default Firebase;
