var express = require("express");
var router = express.Router();
var resController = require("./resController");

router.post("/getRes", resController.getRes);
router.post("/createRes", resController.createRes);
router.post('/search',resController.search)
router.post('/createJoin',resController.createJoin)
router.post('/join',resController.join)
router.post('/delete',resController.delete)
module.exports = router;
