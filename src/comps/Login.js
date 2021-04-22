import {auth,db } from '../firebase_config.js';
import firebase from 'firebase';
import React, { useState } from 'react';

const googleProvider = new firebase.auth.GoogleAuthProvider();

  export default function Login() {

    const [error, setError] = useState(null);

 const signInWithGoogle = () => {
  
  auth.signInWithPopup(googleProvider).then((res) => {
    var user = res.user;
    console.log(res.user)
    db.collection("userInfo").doc(user.uid).set({
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      uid: user.uid,
    });
    setError(null);
  })
  .catch((err) => {
    setError(err);
    console.log(error)
  })
}
    return (
        <div className="login-buttons">
          <button className="login-provider-button" onClick={signInWithGoogle}>
          
          <span> Continue with Google to upload your pictures</span>
         </button>
        </div>
    );
  }

 