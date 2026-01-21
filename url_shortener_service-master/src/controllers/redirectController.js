
const Url = require("../models/Url");

exports.redirectUrl = async (req, res) => {
  const { code } = req.params;
  const url = await Url.findOne({ shortCode: code });

  if (!url) return res.status(404).send("URL not found");

  url.clicks++;
  await url.save();

  res.redirect(url.longUrl);
};
