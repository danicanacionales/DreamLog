import firebase from 'firebase';
// import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyAol_AIlU3uBukte5OdPMdnLaDOyCznYJc",
    authDomain: "dreamlogdb.firebaseapp.com",
    databaseURL: "https://dreamlogdb.firebaseio.com",
    projectId: "dreamlogdb",
    storageBucket: "dreamlogdb.appspot.com",
    messagingSenderId: "295861663844",
    // timestampsInSnapshots: true
  };

firebase.initializeApp(config);

// const settings = { timestampsInSnapshots: true };
// firebase.settings(settings);

export default firebase;
