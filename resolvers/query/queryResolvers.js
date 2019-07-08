module.exports = {
  Query: {
		async placeholder(parent, { input }, { dataSources, req, app, postgres }){
			return await dataSources.database.queryPlaceholder('placeholder')
		},

		async placeholderApi(parent, { input }, { dataSources, req, app, postgres }){
			return await dataSources.placeholderApi.queryPlaceholder('placeholder')
		},
  },
}
