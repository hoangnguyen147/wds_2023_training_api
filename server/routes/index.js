const router = require("express").Router();

const postApi = require("./post");

router.use("/post", postApi);

module.exports = router;