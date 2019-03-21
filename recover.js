const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (url) => {
    const { data: html } = await axios.get(url)
    return html;
}

const getTwitterFollowers = async (html) => {
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
}

const getInstagramFollowers = async (html) => {
    const $ = cheerio.load(html);
    const stringData = $('script[type=application/ld+json]').html();
    const pageObject = JSON.parse(stringData);
    return parseInt(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount);
}

module.exports = {
    getHTML,
    getTwitterFollowers,
    getInstagramFollowers
}