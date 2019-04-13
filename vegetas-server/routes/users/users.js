var controllers = require("./usersController");
var express = require("express");
var router = express.Router();

router.post("/signIn", controllers.signIn);
router.post("/signUp", controllers.signUp);
router.post("/vegLevel", controllers.vegLevel);
router.post("/pwUpdate", controllers.pwUpdate);
router.get("/signOut", controllers.pwUpdate);

module.exports = router;
