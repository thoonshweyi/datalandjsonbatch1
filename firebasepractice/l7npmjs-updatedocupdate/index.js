// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc } from "firebase/firestore";
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
const db = getFirestore(app);
// console.log(db);

// updateDoc(doc(db,"products","myid1001"),{
//   name:"redbull"
// });

// const dbRef = doc(db,"products","myid1001")
// const data = {
//   name:"deedo"
// }
// updateDoc(dbRef,data);



const dbRef = doc(db,"products","myid1001")
const data = {
  name:"babymind",
  type:"non-food",
  price:2000,
  unit:"bot"
}
updateDoc(dbRef,data).then(()=>{
  console.log("Updated Successfully");  
}).catch(error=>{
  console.log(error);
});