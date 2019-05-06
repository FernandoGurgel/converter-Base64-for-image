const fs = require('fs');
const base64ToImage = require('base64-to-image');
const image2base64 = require('image-to-base64');


function listFilesImages(data){
    // reading folder 
    let files = fs.readdirSync(data);
    // let list = '';
    convertToBase64(data,files);
}

function convertToBase64(data,files){
    let json = [];

    files.forEach(element =>{
        let item = '';
        var name = element.substr(0,element.indexOf('.'));
        image2base64(data+element).then(response => {
            item = new String('{"id":'+name+',"str_photo":"data:image/jpeg;base64,'+ response+'"}'); 
        });
        json.push(item);
        // console.log(test);
    })

    console.log(json);
    
    // data.forEach(element => {
    //     var name = element.substr(0,element.indexOf('.'));
    //     json.push('{"id":"'+name+'", "str_photo":"'+image2base64+'"}')
    // })
}

function formatImage(test){
    let format = test.substr(test.indexOf('/')+1,test.indexOf(';base64')-test.indexOf('/')-1)
    return format
}

function convertToImage(file){
    // load file json 
    let rawdata = fs.readFileSync(file);
    let images = JSON.parse(rawdata);
    // convert base64 to image
    images.forEach( data => {
        var path = 'images/';
        var optionalObj = {'fileName': data.id , 'type':formatImage(data.str_photo)};
    
        var status = base64ToImage(data.str_photo,path,optionalObj);
    
        console.log(status);
    });
}

function findImageList(data){
    images.forEach(element => {
        if (element.id == '1150'){
            console.log(element.str_photo)
        }
    });
}


listFilesImages('images/');