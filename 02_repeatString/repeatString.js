const repeatString = function(string, num) {
    var appendedString = "";
    if (num >= 0){
        for (let i = 0; i < num; i++){
            appendedString += string;
        }
    }
    else {
        appendedString = 'ERROR';
    }
    return appendedString;
};

// Do not edit below this line
module.exports = repeatString;
