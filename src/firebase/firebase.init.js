import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthenitcation=()=>{

    initializeApp(firebaseConfig);
}
export default initializeAuthenitcation;