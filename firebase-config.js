// firebase-config.js
// Firebase
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  databaseURL: "YOUR_REALTIME_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

// Cloudinary
const cloudinaryConfig = {
  cloudName: "YOUR_CLOUD_NAME",
  uploadPreset: "YOUR_UPLOAD_PRESET"
};
