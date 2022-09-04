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



request('https://atcoder.jp/users/ecnerwala',(error,response, html)=>{
    if(!error && response.statusCode==200)
    {
        const $ = cheerio.load(html);
        // const point= $('#content .container .container--inner .row .plR h3 ');
          const point= $('.dl-table[1] tbody tr .no-break ');
        console.log(point.length)
        console.log( point.html());

    }
})

