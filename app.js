const http = require("http");
const { argv } = require("yargs");
const routes = require('./BACK/routes/routes');

// Port argument, if nothing entered, default port is 3000
const inputPort = argv._[0];
const inputTwitter = argv._[1];
const inputFacebook = argv._[2];

http.Server(routes.app);
let port = inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0 && inputPort < 65536) ? inputPort : 3000;

//Launch server on port given by the user
console.log(`Server is running on port : ${port}\nYou can access to the server at the following address : http://localhost:${port}`);
routes.app.listen(port);

module.exports = {};