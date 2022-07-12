const router = require('express').Router();

const { route } = require('./apiRoutes');
const apiRoutes = require('./apiRoutes');


// every route in this file has / prepended before it

// this middleware prepends /api to every route declared in apiRoutes
router.use('/api', apiRoutes);


module.exports = router;