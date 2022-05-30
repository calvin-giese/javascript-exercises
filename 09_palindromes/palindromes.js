const palindromes = function (word) {
    var reverse = '';
    var test = '';
    for (let i = word.length - 1; i >= 0; i--) {
        if (word.at(i).match(/[a-zA-Z]/i)) {
            reverse += word.at(i).toLowerCase();
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (word.at(i).match(/[a-zA-Z]/i)) {
            test += word.at(i).toLowerCase();
        }
    }

    if (reverse == test) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
