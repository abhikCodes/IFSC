var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ifsc = require('ifsc-nodejs');
var x;

var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = router;

router.get('/' ,  function(req, res){
    res.render('../index')
});
router.post('/', urlencodedParser, function(req, res){
    console.log(req.body);
    x= req.body;
    console.log(x['user']);
    ifsc.getDetails(x['user'], function(error, data){
        if(error){
            console.log("Error");
        }
        else{
            console.log("data="+JSON.stringify(data));
            res.render('../details', {lol: data});

        }
    })
    // res.render('../details', {lol: req.body});
})
