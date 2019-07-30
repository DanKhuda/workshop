import "./index.pug"
import  "./index.sass"
import "../assets/img"
import Join from "./components/join/join";
import "./components/about/about";
import "./components/members/members";
import * as firebase from 'firebase/app'
import 'firebase/database'
// import $ from 'jquery';
// window.$ = window.jQuery = $;
// import 'slick-carousel';

const join = new Join();
join.init();

var firebaseConfig = {
    apiKey: "AIzaSyBojtvpYUGz9rzrBjNoYv5UX7sfBfGxjPI",
    authDomain: "bikersclub-45502.firebaseapp.com",
    databaseURL: "https://bikersclub-45502.firebaseio.com",
    projectId: "bikersclub-45502",
    storageBucket: "bikersclub-45502.appspot.com",
    messagingSenderId: "548475479421",
    appId: "1:548475479421:web:3dca9e9ae691162c"
};


firebase.initializeApp(firebaseConfig);