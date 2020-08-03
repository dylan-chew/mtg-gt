import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAFntxl_mNUFiAFp4SS5gWgWr_Z-MGKjj0",
  authDomain: "mtg-game-tracker-ba8da.firebaseapp.com",
  databaseURL: "https://mtg-game-tracker-ba8da.firebaseio.com",
  projectId: "mtg-game-tracker-ba8da",
  storageBucket: "mtg-game-tracker-ba8da.appspot.com",
  messagingSenderId: "309153768869",
  appId: "1:309153768869:web:532fd8c47cfdd89181f44c",
  measurementId: "G-RCYDVH3NFT",
};

// initialize app
firebase.initializeApp(config);
