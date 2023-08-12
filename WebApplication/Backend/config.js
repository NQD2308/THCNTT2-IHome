const firebase = require("firebase")
const firebaseConfig = {
  apiKey: "AIzaSyCE_g8596NsZ8ypy5bltq2abtRML4qj_1Y",
  authDomain: "thcntt2-ihome.firebaseapp.com",
  projectId: "thcntt2-ihome",
  storageBucket: "thcntt2-ihome.appspot.com",
  messagingSenderId: "451054537169",
  appId: "1:451054537169:web:c7be2aa5058459ab2db8f0",
  measurementId: "G-1L94LREB16"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const User = db.collection("MyHome");
module.exports = User;