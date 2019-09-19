const { DataSource } = require("apollo-datasource");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createCookie, setCookie } = require("../utils/Cookies");

class loginDatabase extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  async logIn(input) {
    const { req, postgres } = this.context;
    const { email, password } = input;

    try {
      let loginEmail = email;

      const userPassword = {
        text:
          "SELECT id, email, password FROM boilerplate.users WHERE email = $1",
        values: [loginEmail]
      };
      const result = await postgres.query(userPassword);

      const passwordCheck = await bcrypt.compare(
        password,
        result.rows[0].password
      );

      if (!passwordCheck) throw "incorrect password";

      const tokenData = result.rows[0].id;

      let myJWTToken = await createCookie(
        tokenData,
        Math.floor(Date.now() / 1000) + 1000 * 1000
      );
      setCookie("boilerplate", myJWTToken, req.res);

      if (result.rows.length === 0 || passwordCheck === false)
        throw "email or password is incorrect";

      return {
        message: "logged in"
      };
    } catch (error) {
      console.log(error);
      throw "email or password is incorrect";
    }
  }
}

module.exports = loginDatabase;
