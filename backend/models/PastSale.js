const mongoose = require('mongoose');

const pastSaleSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String, // Product image
  soldAt: Date,
});

module.exports = mongoose.model('PastSale', pastSaleSchema);
