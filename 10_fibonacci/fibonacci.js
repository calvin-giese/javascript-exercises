const fibonacci = function(place) {
    var fibonacci = [];

    if (place < 0) {
        return "OOPS"
    } else {
        for (let i = 0; i < place; i++) {
            if (i < 2) {
                fibonacci[i] = 1;
            } else {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i-2];
            }
        }
        return fibonacci[place - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
