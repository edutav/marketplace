const Ad = require('../model/Ad');
const User = require('../model/User');
const Mail = require('../services/Mail');

class PurchaseController {
	async store (req, res) {
		const { ad, content } = req.body;

		const purchaseAd = await Ad.findById(ad).populate('author');
		const user = await User.findById(req.useId);

		await Mail.sendMail({
			from: '"Eduardo Tavares" <edutav@gmail.com>',
			to: purchaseAd.author.email,
			subject: `Solicitação de compra: ${purchaseAd.title}`
		});

		return res.send();
	}
}

module.exports = new PurchaseController();
