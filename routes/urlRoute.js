const express = require("express");
const router = express.Router();

//Controllers
const {
  generateShortUrl,
  redirectToOriginalUrl,
  getUrlAnalytics,
} = require("../controllers/urlController");

router.post("/", generateShortUrl);

router.get("/:shortUrl", redirectToOriginalUrl);

router.get("/analytics/:shortUrl", getUrlAnalytics);

module.exports = router;
