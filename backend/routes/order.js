var express = require('express');
var router = express.Router();

var Order = require('../models/order');

router.post('/', function (req, res, next) {
    var order = new Order({
        fullname: req.body.fullname,
        address: req.body.address,
        postalcode: req.body.postalcode,
        city: req.body.city,
        email: req.body.email,
        mapShoppingCart: req.body.mapShoppingCart
    });
    order.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved order',
            obj: result
        });
    });
});

module.exports = router;