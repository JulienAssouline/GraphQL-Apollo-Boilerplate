const { RESTDataSource } = require('apollo-datasource-rest')

class PlaceholderApi extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = 'https://api.spacexdata.com/v3/'
	}

	async queryPlaceholder(input) {
		try {
			return {id: input}
		} catch(err) {
			throw err
		}
	}

	async mutationPlaceholder(input) {
		try {
			return {id: input}
		} catch(err) {
			throw err
		}
	}
}

module.exports = PlaceholderApi