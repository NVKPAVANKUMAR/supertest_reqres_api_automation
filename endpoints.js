const baseURL = "https://reqres.in";

const endpoints = {
  users: {
    getUser: (userId) => `${baseURL}/api/users/${userId}`,
    getAllUsers: `${baseURL}/api/users?page=2`,
    postNewUser: `${baseURL}/api/users`,
  },
};

module.exports = endpoints;
