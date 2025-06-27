// firebase-config.js

// ✅ Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1czRjhbfYGqGsGFul49vvjaSZnARSkVE",
  authDomain: "siteview-3bc59.firebaseapp.com",
  databaseURL: "https://siteview-3bc59-default-rtdb.firebaseio.com",
  projectId: "siteview-3bc59",
  storageBucket: "siteview-3bc59.appspot.com", // ✅ corrected URL
  messagingSenderId: "941487179656",
  appId: "1:941487179656:web:6d7c3eb02b61a0856a9c3d",
  measurementId: "G-W9DN8D8HRM"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

// ✅ Cloudinary
const cloudinaryConfig = {
  cloudName: "dvkcrzdhs",
  uploadPreset: "siteview_thumbnails", // set this correctly
  apiUrl: "https://api.cloudinary.com/v1_1/siteview_thumbnails/auto/upload"
};
