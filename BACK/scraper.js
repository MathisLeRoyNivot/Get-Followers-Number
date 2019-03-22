import axios from 'axios';
import cheerio from 'cheerio';
// import db from './db';

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getTwitterFollowers(html) {
  // load up cheerio
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data('count');
}

async function getInstagramFollowers(html) {
  // load up Cheerio
  const $ = cheerio.load(html);
  const dataInString = $('script[type="application/ld+json"]').html();
  const pageObject = JSON.parse(dataInString);
  return parseInt(
    pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

async function getInstagramCount() {
  const html = await getHTML('https://instagram.com/wesbos');
  const instagramCount = await getInstagramFollowers(html);
  return instagramCount;
}
async function getTwitterCount() {
  const html = await getHTML('https://twitter.com/wesbos');
  const twitterCount = await getTwitterFollowers(html);
  return twitterCount;
}

// export async function runCron() {
//   const [iCount, tCount] = await Promise.all([
//     getInstagramCount(),
//     getTwitterCount(),
//   ]);
//   db.get('twitter')
//     .push({
//       date: Date.now(),
//       count: tCount,
//     })
//     .write();
//   db.get('instagram')
//     .push({
//       date: Date.now(),
//       count: iCount,
//     })
//     .write();
//   console.log('Done!');
// }

module.exports = { 
  getHTML,
  getInstagramCount,
  getInstagramFollowers,
  getTwitterCount,
  getTwitterFollowers
}