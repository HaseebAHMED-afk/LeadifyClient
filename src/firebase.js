import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJ5c2pgKkliawSbYAaWMPeLiJdgGDl0aM",
  authDomain: "leadify-client.firebaseapp.com",
  projectId: "leadify-client",
  storageBucket: "leadify-client.appspot.com",
  messagingSenderId: "1097210836409",
  appId: "1:1097210836409:web:d108a5e47aabf7c7723268"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

const fbprovider = new firebase.auth.FacebookAuthProvider()
export const signInWithFacebook = () => auth.signInWithPopup(fbprovider)

export default firebase