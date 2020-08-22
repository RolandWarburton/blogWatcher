const { Page } = require("../models/page");
const debug = require("debug")("v_blogWatcher:queryUpdatePathOfPage");
require("dotenv").config();

// ! DEPRICATED
// ! NOT USING THIS - THE MODEL DOES NOT CONTAIN A fsPath ANYMORE
// * get all pages in the database
/** Returns a promise that resolves to an array of pages
 * or undefined if not found
 * @example
 * getAllPages();
 */
const updateLocalPathOfPage = async (page, newPath) => {
	debug("Running updateLocalPathOfPage from db queries...");
	debug(`the new path will be ${newPath}`);

	const filter = { _id: page._id };
	const update = { fsPath: newPath };

	let newPage = await Page.findOneAndUpdate(filter, update);
	newPage.save();
};

module.exports = updateLocalPathOfPage;
