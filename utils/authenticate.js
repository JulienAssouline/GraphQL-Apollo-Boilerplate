const jwt = require("jsonwebtoken");

const authenticate = (app, req) => {
  const jwtCookie = req.cookies["boilerplate"];

  try {
    const verified_information = jwt.verify(jwtCookie, "secret");

    return verified_information.data;
  } catch (err) {
    throw err;
  }
};

module.exports = authenticate;
