/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\t\t\tmutation registration($registerDto: CreateUserInput!) {\n\t\t\t\tregister(registerDto: $registerDto) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\temail\n\t\t\t\t\t\tprofilePictureUrl\n\t\t\t\t\t\tfullName\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t\taccessToken\n\t\t\t\t}\n\t\t\t}\n\t\t": types.RegistrationDocument,
    "\n\t\t\tmutation login($loginDto: CreateUserInput!) {\n\t\t\t\tlogin(loginDto: $loginDto) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\temail\n\t\t\t\t\t\tprofilePictureUrl\n\t\t\t\t\t\tfullName\n\t\t\t\t\t}\n\t\t\t\t\taccessToken\n\t\t\t\t}\n\t\t\t}\n\t\t": types.LoginDocument,
    "\n\t\t\tmutation logOut {\n\t\t\t\tlogout\n\t\t\t}\n\t\t": types.LogOutDocument,
    "\n\t\t\tquery getAllContent($themeId: String!) {\n\t\t\t\tgetAllContent(themeId: $themeId) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tsentence\n\t\t\t\t\ttranslation\n\t\t\t\t\ttranscription\n\t\t\t\t}\n\t\t\t}\n\t\t": types.GetAllContentDocument,
    "\n\t\t\tquery getAllThemes {\n\t\t\t\tgetAllThemes {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t": types.GetAllThemesDocument,
    "\n\t\t\tmutation createTheme {\n\t\t\t\tcreateTheme {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t": types.CreateThemeDocument,
    "\n\t\t\tmutation deleteTheme($ids: [String!]!) {\n\t\t\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t\t\t}\n\t\t": types.DeleteThemeDocument,
    "\n\t\t\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\t\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t": types.UpdateThemeDocument,
    "\n\t\t\tquery getUser {\n\t\t\t\tfindOne {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t\tfullName\n\t\t\t\t\tprofilePictureUrl\n\t\t\t\t}\n\t\t\t}\n\t\t": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tmutation registration($registerDto: CreateUserInput!) {\n\t\t\t\tregister(registerDto: $registerDto) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\temail\n\t\t\t\t\t\tprofilePictureUrl\n\t\t\t\t\t\tfullName\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t\taccessToken\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tmutation registration($registerDto: CreateUserInput!) {\n\t\t\t\tregister(registerDto: $registerDto) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\temail\n\t\t\t\t\t\tprofilePictureUrl\n\t\t\t\t\t\tfullName\n\t\t\t\t\t\tcreatedAt\n\t\t\t\t\t}\n\t\t\t\t\taccessToken\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tmutation login($loginDto: CreateUserInput!) {\n\t\t\t\tlogin(loginDto: $loginDto) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\temail\n\t\t\t\t\t\tprofilePictureUrl\n\t\t\t\t\t\tfullName\n\t\t\t\t\t}\n\t\t\t\t\taccessToken\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tmutation login($loginDto: CreateUserInput!) {\n\t\t\t\tlogin(loginDto: $loginDto) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\temail\n\t\t\t\t\t\tprofilePictureUrl\n\t\t\t\t\t\tfullName\n\t\t\t\t\t}\n\t\t\t\t\taccessToken\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tmutation logOut {\n\t\t\t\tlogout\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tmutation logOut {\n\t\t\t\tlogout\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery getAllContent($themeId: String!) {\n\t\t\t\tgetAllContent(themeId: $themeId) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tsentence\n\t\t\t\t\ttranslation\n\t\t\t\t\ttranscription\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery getAllContent($themeId: String!) {\n\t\t\t\tgetAllContent(themeId: $themeId) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tsentence\n\t\t\t\t\ttranslation\n\t\t\t\t\ttranscription\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery getAllThemes {\n\t\t\t\tgetAllThemes {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery getAllThemes {\n\t\t\t\tgetAllThemes {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tmutation createTheme {\n\t\t\t\tcreateTheme {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tmutation createTheme {\n\t\t\t\tcreateTheme {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tmutation deleteTheme($ids: [String!]!) {\n\t\t\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tmutation deleteTheme($ids: [String!]!) {\n\t\t\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\t\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\t\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery getUser {\n\t\t\t\tfindOne {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t\tfullName\n\t\t\t\t\tprofilePictureUrl\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery getUser {\n\t\t\t\tfindOne {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t\tfullName\n\t\t\t\t\tprofilePictureUrl\n\t\t\t\t}\n\t\t\t}\n\t\t"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;