
const { nanoid } = require("nanoid");
const Url = require("../models/Url");

exports.createShortUrl = async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = nanoid(6);

  const url = new Url({ longUrl, shortCode });
  await url.save();

  res.json({
    shortUrl: `${process.env.BASE_URL}/${shortCode}`
  });
};
