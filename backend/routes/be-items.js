var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router.get('/', function(req, res, next) {
    Item.find()
        .exec(function(err, items) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: items
            });
        });
});

module.exports = router;
