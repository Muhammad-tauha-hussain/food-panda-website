import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCkuTRwH9e_wGFmDU-P_5cp_CjG-uSaXB8",
  authDomain: "food-panda-c7805.firebaseapp.com",
  projectId: "food-panda-c7805",
  storageBucket: "food-panda-c7805.appspot.com",
  messagingSenderId: "446064014095",
  appId: "1:446064014095:web:d48e6e43d82191e9fd047a",
  measurementId: "G-R30XZV5YQQ"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = 'en';


let google_login = document.getElementById('google-verification') ;
// console.log(google_login);
google_login.addEventListener('click', ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
  });
})



let google_verification_signin = document.getElementById('google-verification-signin');
google_verification_signin.addEventListener('click', ()=>{
  signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  console.log(user);
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.customData.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(credential);
});
})



// let loginbtn = document.getElementById('loginbtn');
// let signupbtn = document.getElementById('signupbtn');

// loginbtn.addEventListener('click', ()=>{
//     let email = document.getElementById('login-email').value;
//     let password = document.getElementById('login-password').value;
// })

