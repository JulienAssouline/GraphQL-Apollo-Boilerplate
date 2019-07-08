module.exports = {
  Mutation: {
		async placeholder(parent, { input }, { dataSources, req, app, postgres }){
			return await dataSources.database.mutationPlaceholder('placeholder')
		},

		async placeholderApi(parent, { input }, { dataSources, req, app, postgres }){
			return await dataSources.placeholderApi.mutationPlaceholder('placeholder')
		},
  },
}



