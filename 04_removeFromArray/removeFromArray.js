const removeFromArray = function(array, ...args) {
    for(let i = 0; i <= args.length-1; i++) {
        //if values arent present in array -> indexOf return -1, check for present values
        let checkPresent =array.indexOf(args[i]);
        if(checkPresent !== -1) 
            //get index of to be removed arg and remove from array
            array.splice(array.indexOf(args[i]),1);
    }
    return array;     
};

// Do not edit below this line
module.exports = removeFromArray;
