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
    "\n\t\t\tquery getAllThemes {\n\t\t\t\tgetAllThemes {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t": types.GetAllThemesDocument,
    "\n\t\t\tmutation createTheme {\n\t\t\t\tcreateTheme {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t": types.CreateThemeDocument,
    "\n\t\t\tmutation deleteTheme($ids: [String!]!) {\n\t\t\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t\t\t}\n\t\t": types.DeleteThemeDocument,
    "\n\t\t\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\t\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\t\t\tid\n\t\t\t\t\tcreatedAt\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t": types.UpdateThemeDocument,
    "\n\t\t\tquery getUser {\n\t\t\t\tfindOne {\n\t\t\t\t\tid\n\t\t\t\t\temail\n\t\t\t\t\tfullName\n\t\t\t\t\tprofilePictureUrl\n\t\t\t\t}\n\t\t\t}\n\t\t": types.GetUserDocument,
    "\n\t\tmutation getNewTokens {\n\t\t\tgetNewTokens {\n\t\t\t\taccessToken\n\t\t\t}\n\t\t}\n\t": types.GetNewTokensDocument,
    "\n\tquery getAllContent($themeId: String!) {\n\t\tgetAllContent(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.GetAllContentDocument,
    "\n\tquery getOneContent($id: String!, $themeId: String!) {\n\t\tgetOneContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.GetOneContentDocument,
    "\n\tmutation crateContent($createContentInput: CreateContentInput!) {\n\t\tcreateContent(createContentInput: $createContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.CrateContentDocument,
    "\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdeleteManyContent(ids: $ids, themeId: $themeId)\n\t}\n": types.DeleteManyContentDocument,
    "\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdeleteContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.DeleteContentDocument,
    "\n\tmutation updateContent($updateContentInput: UpdateContentInput!) {\n\t\tupdateContent(updateContentInput: $updateContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.UpdateContentDocument,
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tmutation getNewTokens {\n\t\t\tgetNewTokens {\n\t\t\t\taccessToken\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tmutation getNewTokens {\n\t\t\tgetNewTokens {\n\t\t\t\taccessToken\n\t\t\t}\n\t\t}\n\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getAllContent($themeId: String!) {\n\t\tgetAllContent(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getAllContent($themeId: String!) {\n\t\tgetAllContent(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getOneContent($id: String!, $themeId: String!) {\n\t\tgetOneContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getOneContent($id: String!, $themeId: String!) {\n\t\tgetOneContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation crateContent($createContentInput: CreateContentInput!) {\n\t\tcreateContent(createContentInput: $createContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation crateContent($createContentInput: CreateContentInput!) {\n\t\tcreateContent(createContentInput: $createContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdeleteManyContent(ids: $ids, themeId: $themeId)\n\t}\n"): (typeof documents)["\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdeleteManyContent(ids: $ids, themeId: $themeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdeleteContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdeleteContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateContent($updateContentInput: UpdateContentInput!) {\n\t\tupdateContent(updateContentInput: $updateContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateContent($updateContentInput: UpdateContentInput!) {\n\t\tupdateContent(updateContentInput: $updateContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;