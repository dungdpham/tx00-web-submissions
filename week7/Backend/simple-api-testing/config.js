//const request = require("supertest")("https://airportgap.dev-tester.com/api");
const request = require('supertest')('https://airportgap.com/api');
const expect = require('chai').expect;

module.exports = {
  request,
  expect,
};
