var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router.post('/', function (req, res, next) {
    var item = new Item({
        name: req.body.name,
        imagePath: req.body.imagePath,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
        category: req.body.category
    });
    item.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved item',
            obj: result
        });
    });
});

module.exports = router;
