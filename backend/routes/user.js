const express = require("express");
const router = express.Router()

router.post("/signup", (req, res, next) => {
    res.json({ txt: "inscription" });
    next();
  });

  router.get("/login", (req, res, next) => {
    res.json({ txt: "connexion" });
    next();
  });


module.exports = router