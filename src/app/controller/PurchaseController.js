const Ad = require('../model/Ad');
const User = require('../model/User');
const Queue = require('../services/Queue');
const PurchaseMail = require('../jobs/PurchaseMail');

class PurchaseController {
	async store (req, res) {
		const { ad, content } = req.body;

		const purchaseAd = await Ad.findById(ad).populate('author');
		const user = await User.findById(req.useId);

		Queue.create(PurchaseMail.key, {
			ad: purchaseAd,
			user,
			content
		}).save();

		return res.send();
	}
}

module.exports = new PurchaseController();
