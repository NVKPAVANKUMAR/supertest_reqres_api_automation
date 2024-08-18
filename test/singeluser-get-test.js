const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));
const fs = require('fs');
const assert = require('chai').assert;
const endpoints = require('../endpoints');

describe('API test GET for "reqres.in"', () => {
  const LINK_URL_GET = endpoints.users.getUser(23);

  it('Test - GET  Single user not found', async () => {
    const response = await request(LINK_URL_GET)
      .get("users")

    // assertion
    assert.equal(response.statusCode, 404);
    assert.deepStrictEqual(response.body, {});

  });
});