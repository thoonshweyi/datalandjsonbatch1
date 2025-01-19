import {getFirestore,collection,addDoc,getDocs,onSnapshot,updateDoc,deleteDoc,doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const db = getFirestore();
const dbRef = collection(db,"mytasks");

var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('hi');

    addnew();

    e.preventDefault();
});


// Get Datas 
let tasks = [];
const getdatas = async ()=>{
    try{
        // const docSnap = await getDocs(dbRef);
        // console.log(docSnap);

        // docSnap.forEach((doc)=>{
        //     // console.log(doc.data());
        //     // console.log(doc.id);

        //     let gettasks = doc.data();
        //     gettasks.id = doc.id;
        //     // console.log(getdatas);

        //     tasks.push(gettasks);
        // });
        // console.log(tasks);

        await onSnapshot(dbRef,docSnap=>{
            // console.log(docSnap);
            // console.log(doc.data());
            // console.log(doc.id);

            tasks = []; // reset new for to reset previous pushed datas
            docSnap.forEach((doc)=>{
                // console.log(doc.data());
                // console.log(doc.id);

                let gettasks = doc.data();
                gettasks.id = doc.id;
                // console.log(getdatas);

                tasks.push(gettasks);
            });
            console.log(tasks);

            showtaskstodom(tasks);
        });
    }catch(err){
        console.log("Get Data Error: "+err);
    }
}
getdatas();

const showtaskstodom = (tasks)=>{
    getul.innerHTML = "";

    tasks.forEach(task=>{
        const li = document.createElement('li');

        if(task.done){
            li.classList.add("done");
        }
        li.appendChild(document.createTextNode(task.todo));
        li.id = task.id;

        li.innerHTML += `
        <div class="action">
            <button type="button" class="edit-btn">edit</button>
            <button type="button" class="delete-btn">delete</button>
        </div>
        `;
        // console.log(li);
        getul.appendChild(li);
    });
}

async function addnew(){
    const todotext = gettextbox.value;
    console.log(todotext);

    if(gettextbox.getAttribute('task-id')){
        // Update Data
        const docRef = doc(db,"mytasks",gettextbox.getAttribute('task-id'));


        try{
            await updateDoc(docRef,{
                todo:todotext,
                done:false
            });

            gettextbox.value = "";
            gettextbox.focus();
            gettextbox.removeAttribute('task-id');
        }catch(err){
            console.log("Update Data Error: "+err);
        }
    }else{
        // Add New
        try{
            await addDoc(dbRef,{
                todo:todotext,
                done:false,
            });

            gettextbox.value = "";
            gettextbox.focus();
        }catch(err){
            console.log("Create Data Error: "+err);
        }
    }
}

getul.addEventListener('click',getclickedli);
function getclickedli(e){
    // console.log(e.target);

    // console.log(e.target.closest('li'));
    // console.log(e.target.closest("li").getAttribute('id'));

    const getid = e.target.closest("li").getAttribute('id');
    if(e.target.className === "edit-btn"){
        edittasks(getid);
    }else if(e.target.className === "delete-btn"){
        deletetasks(getid);
    }else{
        donetasks(getid);
    }
}

// console.log(tasks);
function gettaskbyid(id){
    return tasks.find(task=>{
        return task.id === id;
    })
}
function edittasks(id){
    // console.log("edittasks ",id)
    const task = gettaskbyid(id);
    // console.log(task);
    // console.log(task.todo);

    gettextbox.value = task.todo;
    gettextbox.setAttribute('task-id',task.id);
}
function deletetasks(id){
    // console.log("deletetasks ",id)

    const isconfirmed = confirm("Are you sure to delete ?");
    if(isconfirmed){
        try{
            const docRef = doc(db,"mytasks",id);
            deleteDoc(docRef);
            return true;
        }catch(err){
            console.log("Delete Data Error: "+err);
        }
    }else{
        return false;
    }

}
async function donetasks(id){
    // console.log("donetasks ",id)
    const getli = document.getElementById(id);
    console.log(getli);
    getli.classList.toggle('done');

    const docRef = doc(db,"mytasks",id);
    try{
        await updateDoc(docRef,{
            done : getli.classList.contains("done") ? true : false
        }); 
    }catch(err){
        console.log("Done Data Error: "+err);
    }
}
// https://firebase.google.com/ > Docs > Overview > Firebase fundamentals > Web icon > Available libraries documentation > Click  "Available Firebase JS SDKs (from the CDN)"

// Key Features of onSnapshot()
// Real-Time Updates:

// Unlike getDocs() or getDoc(), which retrieve data only once, onSnapshot() continuously listens for changes in the database and provides real-time updates.
// Callback Execution:

// The function passed as the first argument to onSnapshot() is called whenever there is a change in the Firestore data.