import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCgAejgbbfxyXF1OWkCPfdAAyDKirTsyzw',
  authDomain: 'first-todo-5b62f.firebaseapp.com',
  databaseURL: '',
  projectId: 'first-todo-5b62f',
  storageBucket: 'first-todo-5b62f.appspot.com',
  messagingSenderId: '679302788353',
  appId: '1:679302788353:ios:a6efbb48e4b91bcb8fd700',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };