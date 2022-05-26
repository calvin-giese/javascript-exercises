const sumAll = function(start, end) {
    if(!(typeof(start) == "number") || !(typeof(end) == "number")){
        return "ERROR";
    }

    if(start < 0 || end < 0){
        return "ERROR";
    }

    if(start > end){
        let temp;
        temp = start;
        start = end;
        end = temp;
    }

    var sum = 0;

    for(var i = start; i <= end; i++){
        sum += i;
    }

    return sum;
};

function isNumber(value){
    if(typeof(value) == Number){
        return true;
    }
}

// Do not edit below this line
module.exports = sumAll;
