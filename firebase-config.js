// firebase-config.js
// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1czRjhbfYGqGsGFul49vvjaSZnARSkVE",
  authDomain: "siteview-3bc59.firebaseapp.com",
  databaseURL: "https://siteview-3bc59-default-rtdb.firebaseio.com",
  projectId: "siteview-3bc59",
  storageBucket: "siteview-3bc59.firebasestorage.app",
  messagingSenderId: "941487179656",
  appId: "1:941487179656:web:6d7c3eb02b61a0856a9c3d",
  measurementId: "G-W9DN8D8HRM"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

// Cloudinary
const cloudinaryConfig = {
  cloudName: "siteview_thumbnails",
  uploadPreset: "https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload"


};
