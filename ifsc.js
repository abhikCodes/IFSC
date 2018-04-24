var ifsc = require('ifsc-nodejs');
ifsc.getDetails('KARB0000001', function(error, data){
    if(error){
        console.log("Error");
    }
    else{
        console.log(data);
    }
})
