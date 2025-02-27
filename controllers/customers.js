const movies = require("../data/customers");

async function getAllCustomers(pageSize, page) {
  return movies.getAllCustomers(pageSize, page);
}

async function getCustommerByEmail(email) {
  return movies.getCustommerByEmail(email);
}

async function getCustommerByName(name) {
  return movies.getCustommerByName(name);
}

async function moreAccountsThan(acountCount) {
  return movies.moreAccountsThan(acountCount);
}

async function getClientsByLimit(limit) {
  return movies.getClientsByLimit(limit);
}

module.exports = {
  getAllCustomers,
  getCustommerByEmail,
  moreAccountsThan,
  getClientsByLimit,
  getCustommerByName,
};
