const request = require('supertest');
const assert = require('chai').assert;
const endpoints = require('../endpoints');
describe('API test DELETE for "reqres.in"', () => {
  const LINK_URL_DELETE = endpoints.users.getUser(2);

  it('Test - DELETE of Users', async () => {
    const response = await request(LINK_URL_DELETE)
      .delete("users")

    // assertion
    assert.equal(response.statusCode, 204)

  });
});