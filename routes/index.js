const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Express"
	});
});

router.get("/data", function(req, res, next) {
	res.json(data);
})

router.post("/data/firstName", function(req, res, next) {
	console.log(data)
	const filteredData = data.filter((d) => d.first_name.toLowerCase().startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/lastName", function(req, res, next) {
	const filteredData = data.filter((d) => d.last_name.toLowerCase().startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/email", function(req, res, next) {
	const filteredData = data.filter((d) => d.email.toLowerCase().startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/address", function(req, res, next) {
	const filteredData = data.filter((d) => d.address.toLowerCase().startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/city", function(req, res, next) {
	const filteredData = data.filter((d) => d.city.toLowerCase().startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/state", function(req, res, next) {
	const filteredData = data.filter((d) => d.state.toLowerCase().startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/zip", function(req, res, next) {
	const filteredData = data.filter((d) => d.zip.startsWith(req.body));
	res.json(filteredData);
})

router.post("/data/loanNumber", function(req, res, next) {
	const filteredData = data.filter((d) => d.loan_number.startsWith(req.body));
	res.json(filteredData);
})

module.exports = router;