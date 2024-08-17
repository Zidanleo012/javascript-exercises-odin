const findTheOldest = function (people) {
    const YEAR = new Date().getFullYear();

    let oldestPeople = people.reduce((curr, people) => {
        const currAge = (curr.yearOfDeath || YEAR) - curr.yearOfBirth;
        const peopleAge = (people.yearOfDeath || YEAR) - people.yearOfBirth;

        return currAge > peopleAge ? curr : people
    })

    return oldestPeople;
};

// Do not edit below this line
module.exports = findTheOldest;
