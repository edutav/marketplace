const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');

const controllers = require('./app/controller');

routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }));

routes.post('/users', controllers.UserController.store);
routes.post('/session', controllers.SessionController.store);

module.exports = routes;
