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
	const filteredData = data.filter((d) => d.id.startsWith(req.body.id));
	res.json(filteredData);
})

router.get("/data/:firstName", function(req, res, next) {
	const filteredData = data.filter((d) => d.first_name.startsWith(req.body.firstName));
	res.json(filteredData);
})

router.get("/data/:lastName", function(req, res, next) {
	const filteredData = data.filter((d) => d.last_name.startsWith(req.body.lastName));
	res.json(filteredData);
})

router.get("/data/:email", function(req, res, next) {
	const filteredData = data.filter((d) => d.email.startsWith(req.body.email));
	res.json(filteredData);
})

router.get("/data/:address", function(req, res, next) {
	const filteredData = data.filter((d) => d.address.startsWith(req.body.address));
	res.json(filteredData);
})

router.get("/data/:city", function(req, res, next) {
	const filteredData = data.filter((d) => d.city.startsWith(req.body.city));
	res.json(filteredData);
})

router.get("/data/:state", function(req, res, next) {
	const filteredData = data.filter((d) => d.state.startsWith(req.body.state));
	res.json(filteredData);
})

router.get("/data/:zip", function(req, res, next) {
	const filteredData = data.filter((d) => d.zip.startsWith(req.body.zip));
	res.json(filteredData);
})

router.post("/data/loanNumber", function(req, res, next) {
	console.log(data)
	const filteredData = data.filter((d) => d.loan_number.startsWith(req.body));
	res.json(filteredData);
})

module.exports = router;