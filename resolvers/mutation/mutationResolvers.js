module.exports = {
  Mutation: {
    async signUp(parent, input, { dataSources, req, app, postgres }) {
      return await dataSources.signupDatabase.signUp(input);
    },
    async logIn(parent, input, { dataSources, req, app, postgres }) {
      return await dataSources.loginDatabase.logIn(input);
    }
  }
};
