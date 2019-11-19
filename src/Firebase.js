import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWFSx53mAkGNtEIqYx8ln4Hc-g_Suv5po",
    authDomain: "memo-bd88a.firebaseapp.com",
    databaseURL: "https://memo-bd88a.firebaseio.com",
    projectId: "memo-bd88a",
    storageBucket: "memo-bd88a.appspot.com",
    messagingSenderId: "48240161214",
    appId: "1:48240161214:web:b18ba0c2863f3d773c49ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;