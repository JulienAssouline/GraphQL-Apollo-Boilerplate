const { DataSource } = require('apollo-datasource')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../utils/DSHelperFunctions/authenticate')

class Database extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {
		this.context = config.context
	}

	async queryPlaceholder(input) {
		try {
			return { id: input }
		} catch(err) {
			throw err
		}
	}

	async mutationPlaceholder(input) {
		try {
			return { id: input }
		} catch(err) {
			throw err
		}
	}
}

module.exports = Database