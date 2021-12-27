const fibonacci = function(num) {
    let result = [];
    result[0] = 0;
    result[1] = 1;
    for(let i = 2; i <= num; i++) {
        result[i] = result[i - 1] + result [i - 2];
    }
    if(num > 0) {
        return result[num];
    } else {
        return "OOPS"
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
