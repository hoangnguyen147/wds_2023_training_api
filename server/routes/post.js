const express = require("express");

const router = express.Router();

const postCtl = require("../controllers/post");

router.get("/", postCtl.getPosts);
router.post("/", postCtl.createPost);

module.exports = router;
