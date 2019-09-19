const { DataSource } = require("apollo-datasource");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 12;
const { createCookie, setCookie } = require("../utils/Cookies");

// const authenticate = require("../authenticate");

class signupDatabase extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  async signUp(input) {
    const { req, postgres } = this.context;
    const { email, password, fullname } = input;

    let hashedpassword = await bcrypt.hash(password, saltRounds);

    const newUserInsert = {
      text:
        "INSERT INTO boilerplate.users (email, password, fullname) VALUES ($1, $2, $3) RETURNING *",
      values: [email.toLowerCase(), hashedpassword, fullname]
    };

    try {
      let result = await postgres.query(newUserInsert);

      const tokenData = result.rows[0].id;

      let myJWTToken = await createCookie(
        tokenData,
        Math.floor(Date.now() / 1000) + 1000 * 1000
      );
      setCookie("boilerplate", myJWTToken, req.res);

      return {
        message: "yes"
      };
    } catch (error) {
      console.log(error);

      throw "Email is already taken";
    }
  }
}

module.exports = signupDatabase;
