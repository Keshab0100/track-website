
const cc=document.getElementById("cc");

function getData()
{ 
    url1="https://competitive-coding-api.herokuapp.com/api/codechef/keshab_02";
    url2="https://competitive-coding-api.herokuapp.com/api/codeforces/keshab01";
    fetch(url1).then((response)=>{
   return response.json()
    }).then((data)=>{
        console.log(data.rating);
        const rat=data.rating;
        cc.innerHTML=rat;
    })
    fetch(url2).then((response)=>{
        return response.json()
         }).then((data)=>{
             console.log(data.rating);
             const rat=data.rating;
             cf.innerHTML=rat;
         })
}
