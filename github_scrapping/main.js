const axios = require("axios");
const cheerio = require("cheerio");

let url = "https://github.com/topics";

axios.get(url)
    .then((response) => {
        const html = response.data;
        getTopicLinks(html);
    })
    .catch((err) => {
        console.log(err);
    });

function getTopicLinks(html) {
    const $ = cheerio.load(html);
    // Correct the selector for GitHub topic links
    const linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");

    linkElemArr.each((i, elem) => {
        const href = $(elem).attr("href");
        console.log(href);
        // Uncomment below to print full link
        // const fullLink = `https://github.com${href}`;
        // console.log(fullLink);
    });
}
