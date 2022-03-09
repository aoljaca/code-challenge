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

router.get("/data/:id", function(req, res, next) {
	const filteredData = data.filter((d) => d.id = req.body.id);
	res.json(filteredData);
})

router.get("/data/:firstName", function(req, res, next) {
	const filteredData = data.filter((d) => d.first_name = req.body.firstName);
	res.json(filteredData);
})

router.get("/data/:lastName", function(req, res, next) {
	const filteredData = data.filter((d) => d.last_name = req.body.lastName);
	res.json(filteredData);
})

router.get("/data/:email", function(req, res, next) {
	const filteredData = data.filter((d) => d.email = req.body.email);
	res.json(filteredData);
})

router.get("/data/:address", function(req, res, next) {
	const filteredData = data.filter((d) => d.address = req.body.address);
	res.json(filteredData);
})

router.get("/data/:city", function(req, res, next) {
	const filteredData = data.filter((d) => d.city = req.body.city);
	res.json(filteredData);
})

router.get("/data/:state", function(req, res, next) {
	const filteredData = data.filter((d) => d.state = req.body.state);
	res.json(filteredData);
})

router.get("/data/:zip", function(req, res, next) {
	const filteredData = data.filter((d) => d.zip = req.body.zip);
	res.json(filteredData);
})

router.get("/data/:loanNumber", function(req, res, next) {
	const filteredData = data.filter((d) => d.loan_number = req.body.loanNumber);
	res.json(filteredData);
})

module.exports = router;