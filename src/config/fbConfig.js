import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXoOvV4VnYMoeONTSsiJk3H5B7RUo2448",
  authDomain: "chattest-31e27.firebaseapp.com",
  databaseURL: "https://chattest-31e27.firebaseio.com",
  projectId: "chattest-31e27",
  storageBucket: "chattest-31e27.appspot.com",
  messagingSenderId: "245737734075",
  appId: "1:245737734075:web:3b76543179fd4e87650e9e"
};

 
export default firebase.initializeApp(firebaseConfig);;
