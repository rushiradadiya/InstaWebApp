import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDKheM51nO2Vxt4zy2o0dGgU8z0e9L3CQ8",
    authDomain: "concise-lambda-249206.firebaseapp.com",
    databaseURL: "https://concise-lambda-249206.firebaseio.com",
    projectId: "concise-lambda-249206",
    storageBucket: "concise-lambda-249206.appspot.com",
    messagingSenderId: "128622130059",
    appId: "1:128622130059:web:19dce9849f72e0c953b58e",
    measurementId: "G-L8XC5YECRR"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;


