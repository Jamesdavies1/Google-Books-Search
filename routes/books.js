const router = require("express").Router();

const { findAll, create } = require("../controllers/book.js");

router.get("/", findAll);
router.post("/", create);

module.exports = router;
