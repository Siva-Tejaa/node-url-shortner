const { URL } = require("../models/urlSchema");

const ShortUniqueId = require("short-unique-id");

const uid = new ShortUniqueId({ length: 8 });

const generateShortUrl = async (req, res) => {
  const newUrl = await URL.create({
    originalUrl: req.body.url,
    shortUrl: uid.randomUUID(8),
  });

  return res.status(200).json(newUrl);
};

const redirectToOriginalUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const isUrl = await URL.findOne({ shortUrl });

  if (isUrl === null) {
    return res.status(404).send("Url not found");
  }

  const addTimestamp = await URL.findOneAndUpdate(
    { shortUrl: req.params.shortUrl },
    {
      $push: { visitHistory: { timestamp: new Date() } },
    }
  );

  return res.redirect(isUrl.originalUrl);
};

const getUrlAnalytics = async (req, res) => {
  const { shortUrl } = req.params;
  const isUrl = await URL.findOne({ shortUrl });
  if (isUrl === null) {
    return res.status(404).send("Url not found");
  }

  console.log(isUrl);

  return res.json({
    numofVisits: isUrl.visitHistory.length,
    visitHistory: isUrl.visitHistory,
    url: isUrl.originalUrl,
  });
};

module.exports = { generateShortUrl, redirectToOriginalUrl, getUrlAnalytics };
