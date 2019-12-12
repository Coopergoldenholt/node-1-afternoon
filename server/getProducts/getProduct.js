const products = require("../../products.json");

module.exports = {
	getProduct: (req, res, next) => {
		const item = products.find(ele => {
			return ele.id === Number(req.params.id);
		});
		if (!item) {
			return res.status(200).send(`Item not in list`);
		}
		return res.status(200).send(item);
	}
};
