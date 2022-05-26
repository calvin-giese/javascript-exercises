const leapYears = function(year) {
    var leapYear = false;

    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                leapYear = true;
            }
        }
        else{
            leapYear = true;
        }
    }
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
