// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,setDoc,doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPFiI2CjnwT5-fYogUKxVwazbpY1Y7Lcw",
  authDomain: "my-first-project-3af4a.firebaseapp.com",
  projectId: "my-first-project-3af4a",
  storageBucket: "my-first-project-3af4a.firebasestorage.app",
  messagingSenderId: "846228196317",
  appId: "1:846228196317:web:206598c443305a7ed64434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log(app);

const db = getFirestore(app);
// console.log(db);

// setDoc(doc(db,"products","myid1002"),{
//      name:"redbull",
//      type:"food",
//      price:1000
// }).then(()=>{
//      console.log("Create Successfully")
// }).catch(error=>{
//      console.log(error)
// });

setDoc(doc(collection(db,"products")),{
     name:"redbull",
     type:"food",
     price:1000
}).then(()=>{
     console.log("Create Successfully");
}).catch(error=>{
     console.log(error);
});


// *can't exist duplicate document
// *it will overwrite the existing value
