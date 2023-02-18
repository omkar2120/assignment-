const express = require("express");
const UserController = require("../controller/UserController.js");

const router = express.Router();

router.post("/createUser", UserController.createUser);
router.post("/createTask", UserController.createTask);
router.get("/getAllUserData", UserController.getAllUserData);
router.get("/getAllTaskData", UserController.getAllTaskData);

module.exports = router;
