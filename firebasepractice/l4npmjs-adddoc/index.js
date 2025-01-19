// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc } from "firebase/firestore";
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

// addDoc(collection(db,"users"),{
//      name:"aung aung",
//      city:"Yangon",
//      age:20
// });

// =>display auto generated id ! after data set
addDoc(collection(db,"users"),{
     name:"aung aung",
     city:"Yangon",
     age:20
}).then(docRef=>{
     console.log(docRef.id);
}).catch(error=>{
     console.log(error);
});


// Start Collection         Add document             Add field
// users                    TmaW5thGlWIaRTszrYD4     name:"aung aung",
//                          uFQ0eDOlpHjkhhxjeJf5     city:"Yangon",
//                                                   age:20
// *can exist duplicate row
                         

// =>Create database
// https://console.firebase.google.com/ > Build > Firestore Database > Create database >
// Database Id = (default)
// Location = asia-southease1 (Singapore)
// Next > Start in production mode > Create

// addDoc(collection(db,"users"),{
// 
// });

// Error for writing
// [FirebaseError: 7 PERMISSION_DENIED: Missing or insufficient permissions.] {
//      code: 'permission-denied',
//      customData: undefined,
//      toString: [Function (anonymous)]
//    }
   
// Error for writing (Solved)
// Rules > allow read, write: if true; > Publish



// 1. Collection
// A collection is like a container or folder that groups related documents. It is a logical way to organize your data.

// Example: In your screenshot, users is a collection. It stores all the user-related data.
// Collections can only contain documents (not other collections directly).
// Key Points:

// A collection can have many documents.
// Collections are the top-level structure in Firestore.
// Collection names are case-sensitive and must be unique within the database.
// 2. Document
// A document is a single record or entry in a collection. It contains the actual data in the form of fields (key-value pairs).

// Example: In the users collection, the document with ID F45RecB1JvxfHkyhS21n is a single user entry.
// It contains fields such as:
// name: "aung aung"
// age: 20
// city: "Yangon"
// Key Points:

// Documents are JSON-like objects, meaning they are structured as key-value pairs.
// Each document must have a unique ID within its collection.
// Firestore auto-generates document IDs if you don’t provide one.
// 3. Field
// A field is an individual piece of data stored in a document. It consists of a key (the name of the field) and a value (the data).

// Example:
// Field name has the value "aung aung".
// Field age has the value 20.
// Field city has the value "Yangon".
// Key Points:

// Field names are case-sensitive (e.g., Name and name are treated as different fields).
// Fields can store various data types, such as:
// Strings (e.g., "Yangon")
// Numbers (e.g., 20)
// Booleans (e.g., true)
// Arrays (e.g., ["apple", "orange"])
// Maps (nested objects) (e.g., {street: "Main", zip: "11011"})
// Timestamps (e.g., 2025-01-01T12:00:00Z)
// 4. Document ID
// The document ID is a unique identifier for a document within a collection.

// Example: In your screenshot, the document ID is F45RecB1JvxfHkyhS21n.
// Firestore can automatically generate IDs like this, or you can manually assign a custom ID.
// Key Points:

// IDs ensure no two documents in the same collection have the same identifier.
// If you manually specify IDs, you must ensure they are unique within the collection.
// 5. Subcollection
// A subcollection is a collection nested inside a document. It allows for hierarchical or relational data storage.

// Example:
// If the F45RecB1JvxfHkyhS21n document has a subcollection named orders, it could store all the orders made by this user.
// Key Points:

// Subcollections can contain their own documents and even their own subcollections.
// This nesting allows for complex data structures.



