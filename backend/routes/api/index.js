const router = require('express').Router();
const textGenRouter = require('./textGen');

router.use('/textGen', textGenRouter);

// Test route
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});  

module.exports = router;