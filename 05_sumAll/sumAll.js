function sumAll(...args) {

    //sorts numbers ascending
    args.sort(function(a, b){return a - b;});

    let sum = 0;

    //add first number until first number = second number, e.g 1 + 2 + 3 
    for(; args[0] <= args[1]; args[0]++) {
        if (args[0] < 0 || args[1] < 0) {
            sum = "ERROR";
            break;
        }
        else if (typeof args[0] !== "number" || typeof args[1] !== "number") {
            sum = "ERROR"
            break;
        }
        else {
            sum += args[0];
        }
    }
    return sum 
}

// Do not edit below this line
module.exports = sumAll;
