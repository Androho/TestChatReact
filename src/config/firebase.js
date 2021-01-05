import firebase from "firebase";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA8rRfnuAyBQ5ofYPbNaYBUm-cxzjLThm4",
    authDomain: "testchat-c27fe.firebaseapp.com",
    databaseURL: "https://testchat-c27fe.firebaseio.com",
    projectId: "testchat-c27fe",
    storageBucket: "testchat-c27fe.appspot.com",
    messagingSenderId: "873520945535",
    appId: "1:873520945535:web:77e5ea87f88c62971d224a"

};

const fire=firebase.initializeApp(config);
export default fire;
