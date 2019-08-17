import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBqW-b8PMTln_Uy184JUOq6pPOcw4w3zVM',
  authDomain: 'csms-leso.firebaseapp.com',
  databaseURL: 'https://csms-leso.firebaseio.com',
  projectId: 'csms-leso',
  storageBucket: 'csms-leso.appspot.com',
  messagingSenderId: '921034475198',
  appId: '1:921034475198:web:dd566bbdf42b0e28'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
