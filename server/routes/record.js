const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

recordRoutes.get('/', (req, res)=>{
	res.status(200);
	res.send("Welcome to root URL of Server");
});

module.exports =recordRoutes;