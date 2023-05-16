//is a function or method collection which will be used later
const fs = require('js');

//create getNewId function to obtain new unique ID
const getNewId = (array) => {
    if(array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 1;
    }
};

//creating the Date object and convert it to string
const newDate = () => new Date().toString();

//create a checking function to see if the id is in array
const mustBeInArray = (array, id) =>{
    //Promise 都有2個Para
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id);
        if (!row) {
            reject({
                message: 'element is not avalible',
                status: 404
            }) 
        }
        resolve(row);
    });
};

//
