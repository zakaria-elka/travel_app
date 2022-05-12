
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {

    apiKey: "AIzaSyDaJ3PDaE2KwvTm4gHx0qOUxKf6gOcD3YM",
  
    authDomain: "traveling-257ed.firebaseapp.com",
  
    projectId: "traveling-257ed",
  
    storageBucket: "traveling-257ed.appspot.com",
  
    messagingSenderId: "376668409283",
  
    appId: "1:376668409283:web:e61a386ab2f882bbfc4176"
  
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


  export function signUp(email,password){


   return createUserWithEmailAndPassword(auth,email,password);

  }


  export function logout(){
 try{

   return signOut(auth);
}catch(err){

  alert(err.code);

}
 }

 export function useAuth(){

  const [currentUser , setCurrentUser]= useState();
 
  useEffect(()=>{
   const nosub = onAuthStateChanged(auth ,user =>{setCurrentUser(user)});
   return nosub;
  },[]);


  return currentUser;

}

  

export function login(email,password){

try{

 return signInWithEmailAndPassword(auth,email,password);

}catch(err){

   alert(err.code)
}
}





  