import {
  getDatabase,
  get,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyDBHmrl7oJmnxjEGhXaTrhuk5sOS01b3bs",
  authDomain: "ic-hacks.firebaseapp.com",
  databaseURL: "https://ic-hacks-default-rtdb.firebaseio.com",
  projectId: "ic-hacks",
  storageBucket: "ic-hacks.appspot.com",
  messagingSenderId: "89955355894",
  appId: "1:89955355894:web:c8e52d51f7117c76b070d7",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbref = ref(database);
var usnGo;
get(child(dbref, "mentee"))
  .then((snapshot) => {
    if (snapshot.exists()) {
      var dataaaja = [];

      snapshot.forEach((childSnapshot) => {
        dataaaja.push(childSnapshot.val());
      });
      console.log(dataaaja);


      const cf100 = dataaaja[0].codeforces;
      console.log(cf100);

      dataaaja.map((data) => {
        // console.log(data);
        const cc = "codechef";
        const cfun = data.codeforces || "keshab01"
        const ccum = data.codechef;
        const url1 = `https://competitive-coding-api.herokuapp.com/api/${cc}/${ccum}`;
        const url2 = `https://competitive-coding-api.herokuapp.com/api/codeforces/${cfun}`;
        fetch(url1)
          .then((response) => {
            return response.json();
          })
          .then((datamera) => {
            const usn100 = data.usn;
            // const cc100=usn100.codechef;
            // console.log(cc100);

            const card = document.createElement("div");
            card.classList = "col-3";
            const fill = document.getElementById("fill")
            fill.innerHTML += `
              <a class="col-3" href="/menteeDash" id="${data.usn}" onclick = "give(${data.usn})">
              <h3 >Name : <span id="name">${data.name}</span></h3>
              <h4 >Email : <span id="email">${data.email}</span></h4>
              <h4 >USN : <span id="usn">${data.usn}</span></h4>
              <h4>Codechef rating : <span id="cc">${datamera.rating}</span></h4>
              </a>`;
          });
        fetch(url2)
          .then((response) => {
            return response.json();
          })
          .then((data) => { });
        usnGo = data.usn
      });
    } else {
      alert("unsuccessful");
    }
  })
  .catch((error) => {
    console.error(error);
  });
