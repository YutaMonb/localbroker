'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send({
        'status': 'true', 
        'version': '0.0.0'
    });
});

module.exports = router;