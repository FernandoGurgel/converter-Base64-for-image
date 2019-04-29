const fs = require('fs');
const base64ToImage = require('base64-to-image');

let rawdata = fs.readFileSync('images.json');
let images = JSON.parse(rawdata);

// convertendo base64 para image
// images.forEach( data => {
//     var path = 'images';
//     var optionalObj = {'fileName': data.id , 'type':'jpeg'};

//     var status = base64ToImage(data.str_photo,path,optionalObj);

//     console.log(status);
// });


images.forEach(element => {
    if (element.id == '1150'){
    
        console.log(element.str_photo)
    }
});