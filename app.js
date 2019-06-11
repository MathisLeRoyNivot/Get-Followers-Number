// const wait = require('waait');
// const http = require("http");
// const { argv } = require("yargs");
// const routes = require('./routes/routes');

// const { getHTML, getTwitterFollowers, getInstagramFollowers } = require('./recover');

// // Port argument, if nothing entered, default port is 3000
// const inputPort = argv._[0];
// const inputTwitter = argv._[1];
// const inputInstagram = argv._[2];
// let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

// const launchRecovery = async () => {
//     const igPromise = getHTML(`http://www.instagram.com/${inputInstagram}`);
//     const twPromise = getHTML(`http://www.twitter.com/${inputTwitter}`);
//     const [igHTML, twHTML] = await Promise.all([igPromise, twPromise]);

//     const instagramCount = await getInstagramFollowers(igHTML);
//     const twitterCount = await getTwitterFollowers(twHTML);

//     console.log(`${inputInstagram} got ${instagramCount} IG followers \nand ${inputTwitter} got ${twitterCount} Twitter followers.`);
// }

// launchRecovery;

// //Launch server on port given by the user
// http.Server(routes.app);
// routes.app.listen(port, () => {
//     console.log(`Server is running on port : ${port}\nYou can routing to the server at the following address :\x1b[31m http://localhost:${port}/`)
// })

// module.exports = {};

const http = require("http");
const { argv } = require("yargs");
const wait = require('waait');
const routes = require('./routes/routes');

const { getHTML, getTwitterFollowers, getInstagramFollowers } = require ('./recover');

// // Port argument, if nothing entered, default port is 3000
// const inputPort = argv._[0];
const inputInstagram = argv._[0];
const inputTwitter = argv._[1];
// let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

const launchRecovery = async () => {
    const iPromise = getHTML(`https://instagram.com/${inputInstagram}`);
    const tPromise = getHTML(`https://twitter.com/${inputTwitter}`);
    const [instagramHTML, twitterHTML] = await Promise.all([iPromise, tPromise]);
    const instagramCount = await getInstagramFollowers(instagramHTML);
    const twCount = await getTwitterFollowers(twitterHTML);
    console.log(`Twitter account : @${inputTwitter}\nTwitter followers : ${twCount} \n\nInstagram account : @${inputInstagram}\nInstagram followers : ${instagramCount}`);
}

launchRecovery.apply();

//Launch server on port given by the user
// http.Server(routes.app);
// routes.app.listen(port, () => {
//     launchRecovery;
//     console.log(`Server is running on port : ${port}\nYou can routing to the server at the following address :\x1b[31m http://localhost:${port}/`);
// })

module.exports = {}