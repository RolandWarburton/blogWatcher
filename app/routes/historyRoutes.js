const express = require("express");
const buildRouter = require("./buildRouter");
const bodyParser = require("body-parser");
const findHistory = require("../controllers/HistoryRoutes/findHistory");
const verifyPayload = require("../middleware/verifyPayload");
const debug = require("debug")("blogWatcher:routers");
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({
	extended: false,
});

router.use(bodyParser.json());
router.use(urlencodedParser);

const routes = [
	{
		path: "/find/:_id",
		method: "get",
		middleware: [],
		handler: findHistory,
		help: {
			description: "Find history for a page id in the database",
			method: this.method,
			parameters: ["_id: string"],
			example: "/",
		},
	},
];

const help = [];
for (route in routes) {
	help.push({
		path: route.path,
		method: route.method,
		help: route.help,
	});
}

// build the router!
buildRouter(router, routes);

module.exports = { router: router, help: help };
