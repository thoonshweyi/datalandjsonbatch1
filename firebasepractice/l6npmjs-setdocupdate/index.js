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
const db = getFirestore(app);
// console.log(db);

// =>Before Merge
// setDoc(doc(db,"products","myid1001"),{
//      name:"sponsor",
//      type:"food",
//      price: 700
// })
// setDoc(doc(db,"products","t6cw3MAj1RUjXjiRxgZj"),{
//      name:"deedo",
//      type:"food",
//      price: 500
// }).then(()=>{
//      console.log("Update Successfully")
// }).catch(error=>{
//      console.log(error)
// });

// setDoc(doc(db,"products","myid1002"),{
//      name:"speed",
//      type:"food",
//      price: 500,
//      unit:"bot"
// }).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
 
// }).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });

// setDoc(doc(db,"products","t6cw3MAj1RUjXjiRxgZj"),{
//       name:"deedo",
//       type:"food",
// }).then(()=>{
//       console.log("Update Successfully")
// }).catch(error=>{
//       console.log(error)
// });

// After Merge
// setDoc(doc(db,"products","myid1002"),{
//      name:"speed",
//      type:"food",
//      price: 500,
//      unit:"bot"
// }).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
  
// },{merge:true}).then(()=>{
//   console.log("Update Successfully");
// }).catch(error=>{
//   console.log(error);
// });

// =>Before Merge 
// setDoc(doc(db,"products","myid1002"),{
//      name:"deedo",
// }).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price: 500,
//     unit:"bot"
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// =>After Merge
// setDoc(doc(db,"products","myid1002"),{
//      name:"deedo",
// },{merge:true}).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });

// =>Before Merge 
// setDoc(doc(db,"products","myid1002"),{
//      stock:200,
// }).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });

// =>After Merge

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price: 500,
//     unit:"bot"
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//      stock:200,
//      promo:"10%"
// },{merge:true}).then(()=>{
//      console.log("Update Successfully");
// }).catch(error=>{
//      console.log(error);
// });


// ----------------------------------------------
// Before Merge 
// - Every create and update function need to re-define all keys

// After Merge
// - Only the target created and updated keys are defined