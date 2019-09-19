const { DataSource } = require("apollo-datasource");
const authenticate = require("../utils/authenticate");

class UserDatabase extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUser() {
    const { app, req, postgres } = this.context;

    const userId = authenticate(app, req);

    const user = {
      text: "SELECT * FROM boilerplate.users WHERE id = $1",
      values: [userId]
    };

    const result = await postgres.query(user);

    return result.rows[0];
  }
}

module.exports = UserDatabase;
