import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCE8WHVUea86YdLX5DNNLC2NVCG0KU7xpU",
  authDomain: "finns-12102.firebaseapp.com",
  databaseURL: "https://finns-12102.firebaseio.com",
  projectId: "finns-12102",
  storageBucket: "finns-12102.appspot.com",
  messagingSenderId: "578376767248",
  appId: "1:578376767248:web:e64718ee9975215c5c3795",
  measurementId: "G-JL48CCM4V9"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
