// const axios = require('axios');
// const cheerio = require('cheerio');

// const getHTML = async (url) => {
//     const { data: html } = await axios.get(url)
//     return html;
// }

// const getTwitterFollowers = async (html) => {
//     const $ = cheerio.load(html);
//     const span = $('[data-nav="followers"] .ProfileNav-value');
//     return span.data('count');
// }

// const getInstagramFollowers = async (html) => {
//     const $ = cheerio.load(html);
//     const stringData = $('script[type=application/ld+json]').html();
//     const pageObject = JSON.parse(stringData);
//     return parseInt(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount);
// }

const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (url) => {
    const {
        data: html
    } = await axios.get(url);
    return html;
}

const getTwitterFollowers = async (html) => {
    // load up cheerio
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
}

const getInstagramFollowers = async (html) => {
    const $ = cheerio.load(html);
    const dataInString = $('script[type="application/ld+json"]').html();
    const pageObject = JSON.parse(dataInString);
    return parseInt(
        pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
    );

    // console.log($.html());
    // const span = $('[data-nav="followers"] .ProfileNav-value');
    // return span.data('count');
    //            <script type="application/ld+json">
}

module.exports = {
    getHTML,
    getTwitterFollowers,
    getInstagramFollowers
}