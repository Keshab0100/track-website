// const cc = "codechef";
// const ccum = "keshab_02";

// function getData() {
//   url1 = `https://competitive-coding-api.herokuapp.com/api/${cc}/${ccum}`;
//   url2 = "https://competitive-coding-api.herokuapp.com/api/codeforces/keshab01";
//   fetch(url1)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       document.getElementById("fill").innerHTML = `
//         <div class="col-3" id="datadisplay">
//         <h3 >Name : <span id="name"></span></h3>
//         <h4 >Email : <span id="email"></span></h4>
//         <h4 >USN : <span id="usn"></span></h4>
//         <h4>Codechef rating : <span id="cc">${data.rating}</span></h4>
//         </div>`;
//     });
//   fetch(url2)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {});
// }
