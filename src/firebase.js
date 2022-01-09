// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const functions = require('firebase-functions');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || functions.config().firebase.api_key,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || functions.config().auth_domain,
  projectId: process.env.REACT_APP_PROJECT_ID || functions.config().firebase.project_id,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || functions.config().firebase.storage_bucket,
  messagingSenderId: process.env.REACT_APP_MS_ID || functions.config().firebase.ms_id,
  appId: process.env.REACT_APP_APP_ID || functions.config().firebase.app_id
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);