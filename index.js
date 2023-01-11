// Code your solution in this file!
const returnFirstTwoDrivers = (function () {
    return ['Antonia', 'Nuru'];
});

const returnLastTwoDrivers = (function () {
    return ['Amari', 'Mo'];
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return(function (fare){
        return num * fare
    })
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(selectingDrivers, returnLastTwoDrivers) {
   switch(selectingDrivers, returnLastTwoDrivers) {
    case "Antonia":
        return returnFirstTwoDrivers();
    case "Nuru":
        return returnFirstTwoDrivers();
    case returnLastTwoDrivers:
        return returnLastTwoDrivers();
   }
}

console.log(selectDifferentDrivers(returnLastTwoDrivers))