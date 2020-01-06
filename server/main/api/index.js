let controller = require('./controller');
let express = require('express');
let router = new express.Router();

router.post('/enquiry', controller.addEnquiry);
router.post('/feedback', controller.addFeedback);

module.exports = router;