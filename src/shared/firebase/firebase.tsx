// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBA3JtWTk1sue98D_arud2-TBqZnjigo6o',
  authDomain: 'grupo-connect-site.firebaseapp.com',
  projectId: 'grupo-connect-site',
  storageBucket: 'grupo-connect-site.appspot.com',
  messagingSenderId: '325188492375',
  appId: '1:325188492375:web:09bcaac3a8e7a54e7e9712',
  measurementId: 'G-QL2RR0CN95',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
