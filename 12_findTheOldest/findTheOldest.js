const findTheOldest = function(people) {
    var oldestAge = 0;
    var oldestAgeIndex = 0;

    for (let i = 0; i < people.length; i++) {
        let yearOfBirth = people[i].yearOfBirth;
        let yearOfDeath = people[i].yearOfDeath;
        let todaysYear = new Date().getFullYear();
        let age = 0;

        if (yearOfDeath > 0) {
            age = yearOfDeath - yearOfBirth;
        } else {
            age = todaysYear - yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestAgeIndex = i;
        }
    }

    return people[oldestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
