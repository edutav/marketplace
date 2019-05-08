const express = require('express');
const validation = require('express-validation');
const handle = require('express-async-handler');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');

const controllers = require('./app/controller');
const validators = require('./app/validators');

routes.post(
	'/users',
	validation(validators.User),
	handle(controllers.UserController.store)
);
routes.post(
	'/session',
	validation(validators.Session),
	handle(controllers.SessionController.store)
);

routes.use(authMiddleware);

/**
 * Ads
 */
routes.get('/ads', handle(controllers.AdController.index));
routes.get('/ads/:id', handle(controllers.AdController.show));
routes.post(
	'/ads',
	validation(validators.Ad),
	handle(controllers.AdController.store)
);
routes.put(
	'/ads/:id',
	validation(validators.Ad),
	handle(controllers.AdController.update)
);
routes.delete('/ads/:id', handle(controllers.AdController.destroy));

/**
 * Purchases
 */
routes.post(
	'/purchases',
	validation(validators.Purchase),
	handle(controllers.PurchaseController.store)
);

module.exports = routes;
