const router = require('express').Router();

const todoRoutes = require('./todoRoutes');

// every route we declare inside this file will automatically have /api prepended before it

// this middleware will prepend /todos to every route we declare indide the router object we pass into this file
router.use('/todos', todoRoutes);

module.exports = router;