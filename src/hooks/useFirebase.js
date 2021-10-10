import { useEffect,useState } from "react";
import { getAuth,signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuthenitcation from "../firebase/firebase.init";
initializeAuthenitcation()
const useFirebase=()=>{

const [user,setuser]=useState({})

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const signInUsingGoogle=()=>{
  return signInWithPopup(auth, googleProvider)
    // .then((result) => {
       
    //    console.log(result.user);
       
    //   }).catch((error) => {
        
    //     // const errorMessage = error.message;
        
    //   });


}

const logOut=()=>{

    signOut(auth)
    .then(() => {
        setuser({})
      })
      .catch((error) => {
        // An error happened.
      });

}
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
            setuser(user);
          
        }
      });
}, [])



return{
    user,
    signInUsingGoogle,
    logOut
}

}

export default useFirebase;