import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: 'http://localhost:4200/graphql',
	documents: ['src/**/*.{ts,tsx}'],
	ignoreNoDocuments: true,
	generates: {
		'./src/gql/': {
			preset: 'client',
		},
	},
}

export default config
