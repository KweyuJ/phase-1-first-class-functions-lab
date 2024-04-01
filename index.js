// Part1
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));

// Part2
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));

// Part3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Part4
const createFareMultiplier = function (multiplier) {
  return function (value) {
    return value * multiplier;
  };
};
const fareMultiplier = createFareMultiplier(2);
console.log(fareMultiplier(10));

// Part5
const fareDoubler = function (fare) {
  return fare * 2;
};
console.log(fareDoubler(10));

// Part6
const fareTripler = function (fare) {
  return fare * 3;
};
console.log(fareTripler(12));

// Part7
function selectDifferentDrivers(arrayOfDrivers, driverSelectorFunction) {
  return driverSelectorFunction(arrayOfDrivers);
}
