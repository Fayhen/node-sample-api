const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send( { 'message': 'Hello from Node!' } );
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.get('/users/:id', UserController.fetch)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes;
