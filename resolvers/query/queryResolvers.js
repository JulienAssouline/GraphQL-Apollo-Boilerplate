module.exports = {
  Query: {
    async getUser(parent, { input }, { dataSources, req, app, postgres }) {
      return await dataSources.userDatabase.getUser();
    }
  }
};
