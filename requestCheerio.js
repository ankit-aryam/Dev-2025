const request = require("request");
const cheerio = require("cheerio");

request('https://www.worldometers.info/coronavirus/', cb);

function cb(error, reaponse, html){
    if(error){
        console.log(error);
    } else{
        handleHtml(html);
    }
}

function handleHtml(html){
    let selTool = cheerio.load(html);
    let contentArr = selTool("#maincounter-wrap");
    // console.log(h1s.length);
    // let total = selTool(h1s[0]).text();
    // console.log(total);

    for(let i=0;i<contentArr.length;i++){
        let data = selTool(contentArr[i]).text();
        console.log(data);
    }
}