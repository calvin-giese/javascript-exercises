const removeFromArray = function (array, ...values) {
        var newArray = [];
        var match = false;

        array = fillArrayWithProperTypes(array);

        if (array.length > 0){
            for (let i = 0; i < array.length; i++){
                for(let j = 0; j < values.length; j++){
                    if(isEqual(array.at(i), values.at(j))){
                        match = true;
                        break;
                    }
                }
                if(match == false){
                    newArray.push(array.at(i));
                }
                match = false;
            }
        }
        console.log(newArray);
        return newArray;
    };

    function fillArrayWithProperTypes(array){
        var newArray = [];
        for(value of array){
            var numberTypeTest = parseInt(value);
            if(isNaN(numberTypeTest)){
                newArray.push(value);
            }
            else{
                newArray.push(numberTypeTest);
            }
        }
        return newArray;
    }

    function isEqual(value1, value2){
        if(value1 == value2 && typeof(value1) == typeof(value2)){
            return true;
        }
        else{
            return false;
        }
    }

// Do not edit below this line
module.exports = removeFromArray;
