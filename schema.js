const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    placeholder: QueryPlaceholder
		placeholderApi: QueryPlaceholder
  }

	type QueryPlaceholder {
		id: ID
	}

	type Mutation {
		placeholder: MutationPlaceholder
		placeholderApi: MutationPlaceholder
	}

	type MutationPlaceholder {
		id: ID
	}
`

