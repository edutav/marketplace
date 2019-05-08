const Joi = require('joi');

module.exports = {
	body: {
		ad: Joi.string()
			.email()
			.required(),
		content: Joi.string().required()
	}
};
