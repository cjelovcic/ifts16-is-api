const router = require("express").Router();


router.get("/", (req, res) => {
    res.status(200).json({ message: "estoy vivo por el get" });
});

module.exports = router;