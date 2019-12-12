const products = require("../../products.json");

module.exports = {
	getProducts: (req, res, next) => {
		if (Number(req.query.price) > 0) {
			const filteredProducts = products.filter(ele => {
				return Number(req.query.price) < ele.price;
			});
			return res.status(200).send(filteredProducts);
		} else {
			res.status(200).send(products);
		}
	}
};
