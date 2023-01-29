const getPeopleInCity = require("../country/state/city/index");
const getFirstNames = require("../utilites/utils/index");

const getpeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getpeopleInCity;
