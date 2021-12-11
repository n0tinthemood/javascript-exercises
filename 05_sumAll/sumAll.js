function sumAll(...args) {

    //sorts numbers ascending
    args.sort(function(a, b){return a - b;});
    
    let sum = 0;

    //check, that passed parameters are type "number" only
    if (typeof args[0] === "number" && typeof args[1] === "number") {

    //add first number until first number = second number, e.g 1 + 2 + 3 
        for(; args[0] <= args[1]; args[0]++) {
            if (args[0] < 0 || args[1] < 0) {
                sum = "ERROR";
                break;
            }
            else {
                sum += args[0];
            }
        }    
    }
    else {
        sum = "ERROR";
    } 
    return sum 
}

// Do not edit below this line
module.exports = sumAll;
