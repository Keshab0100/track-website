const cheerio= require("cheerio");
const request= require("request");
// request('https://leetcode.com/chaharnishant/',(error,response,html)=>{
//     if(!error && response.statusCode==200)
//     {
//         const $= cheerio.load(html);
//         const total_solved=$('.text-[24px] font-medium text-label-1 dark:text-dark-label-1');
//         console.log(total_solved.html());
//     }
// })


// request('https://www.codechef.com/users/nishant403',(error,response, html)=>{
//     if(!error && response.statusCode==200)
//     {
//         const $ = cheerio.load(html);
//         const rating= $('.rating-number');
//         console.log("Current rating of codechef is "+ rating.html());

//     }
// })


// request('https://codeforces.com/profile/nishant403',(error,response, html)=>{
//     if(!error && response.statusCode==200)
//     {
//         const $ = cheerio.load(html);
//         const rating= $('ul li span .user-red');
//         console.log("Current rating of codeforces is "+ rating.html());

//     }
// })



request('https://www.hackerearth.com/@bhatia.nishant',(error,response, html)=>{
    if(!error && response.statusCode==200)
    {
        const $ = cheerio.load(html);
       
          const points= $(' .metrics-container .points .metric .value');
        console.log(points.length)
        console.log( points.html());

    }
})

