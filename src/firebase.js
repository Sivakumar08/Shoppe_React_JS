// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAe0biOdnjvJGZqrAbm0XHzbPUecmU0Ik",
    authDomain: "shoppe-react.firebaseapp.com",
    databaseURL: "https://shoppe-react-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shoppe-react",
    storageBucket: "shoppe-react.appspot.com",
    messagingSenderId: "440462813265",
    appId: "1:440462813265:web:8d341e76b6276df78b7070",
    measurementId: "G-Q1BFK8LVD3"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
export default database;