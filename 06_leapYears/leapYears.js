const leapYears = function(year) {
    let isLeapYear;

    if(year % 2 === 0) {
        isLeapYear = true;
        if(year % 2 === 0 && year % 400 === 0) {
            isLeapYear = true;
        } else if(year % 2 === 0 && year % 100 === 0) {
        isLeapYear = false;
        }
    } else {
        isLeapYear = false;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
