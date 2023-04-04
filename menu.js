const fs = require('fs');

fs.readdir('./images', function(err, files) {
    if (err) {console.log('error: ', err);} 
    else {
        console.log(files);
    };
});
