
const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  longUrl: String,
  shortCode: String,
  clicks: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Url", UrlSchema);
