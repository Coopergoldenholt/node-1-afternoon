const express = require("express");
const app = express();
const SERVER_PORT = 4000;
const getProducts = require("./getProducts/getProducts");
const getProduct = require("./getProducts/getProduct");

app.get("/api/products", getProducts.getProducts);

app.get("/api/product/:id", getProduct.getProduct);

app.listen(SERVER_PORT, () => {
	console.log(`is it working ${SERVER_PORT}?`);
});
