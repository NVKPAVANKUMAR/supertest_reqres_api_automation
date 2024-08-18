const request = require('supertest');
var chai = require('chai');
chai.use(require('chai-json-schema'));
const fs = require('fs');
const endpoints = require('../endpoints');
const assert = require('chai').assert;
const { faker } = require('@faker-js/faker');

describe('API test PUT for "reqres.in"', () => {
    const LINK_URL_POST = endpoints.users.getUser(2);
  
  it('Test - PUT update users', async () => {
    const body = {
        "name": faker.person.fullName(),
        "job": faker.person.jobTitle()
    }
    const response = await request(LINK_URL_POST)
    .put("users")
    .send(body)

    // assertion
    assert.equal(response.statusCode, 200)
    assert.equal(response.body.name, body.name)  

    const schemaPath = "resources/jsonSchema/put-users-schema.json"
    const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
    assert.jsonSchema(response.body, jsonSchema)

  }); 
});