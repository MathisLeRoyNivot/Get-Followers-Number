const http = require("http");
const { argv } = require("yargs");
const { routes } = require('./routes/routes');

// Port argument, if nothing entered, default port is 3000
const inputPort = argv._[0];
const inputTwitter = argv._[1];
const inputFacebook = argv._[2];
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

//Launch server on port given by the user
http.Server(routes.app);
const launchRouting = (inputDoc, callback) => {
    routes.app.listen(port, () => {
        routes.getHomePage;
        callback(`\x1b[36mServer is running on port : \x1b[31m ${port} \x1b[36m \nYou can routing to the server at the following address :\x1b[31m http://localhost:${port}/`);
    });
}

launchRouting(inputPort, (err, logPort) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(logPort);
    }
});

module.exports = {};