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
    "\n\tmutation registration($registerDto: CreateUserInput!) {\n\t\tregister(registerDto: $registerDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n": types.RegistrationDocument,
    "\n\tmutation login($loginDto: CreateUserInput!) {\n\t\tlogin(loginDto: $loginDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n": types.LoginDocument,
    "\n\tmutation logOut {\n\t\tlogout\n\t}\n": types.LogOutDocument,
    "\n\tmutation getNewTokens {\n\t\tgetNewTokens {\n\t\t\taccessToken\n\t\t}\n\t}\n": types.GetNewTokensDocument,
    "\n\tquery getAllContent($themeId: String!) {\n\t\tgetAllContent(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.GetAllContentDocument,
    "\n\tquery getContentLength($themeId: String!) {\n\t\tgetContentLength(themeId: $themeId)\n\t}\n": types.GetContentLengthDocument,
    "\n\tquery getOneContent($id: String!, $themeId: String!) {\n\t\tgetOneContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.GetOneContentDocument,
    "\n\tmutation crateContent($createContentInput: CreateContentInput!) {\n\t\tcreateContent(createContentInput: $createContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.CrateContentDocument,
    "\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdeleteManyContent(ids: $ids, themeId: $themeId)\n\t}\n": types.DeleteManyContentDocument,
    "\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdeleteContent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.DeleteContentDocument,
    "\n\tmutation updateContent($updateContentInput: UpdateContentInput!) {\n\t\tupdateContent(updateContentInput: $updateContentInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.UpdateContentDocument,
    "\n\tquery getVariations($themeId: String!) {\n\t\tvariations(themeId: $themeId) {\n\t\t\titemsLeft\n\t\t\ttotalItems\n\t\t\tthemeId\n\t\t\tsentence\n\t\t\tcontentId\n\t\t\tvariations {\n\t\t\t\ttranslation\n\t\t\t}\n\t\t}\n\t}\n": types.GetVariationsDocument,
    "\n\tquery getResult($themeId: String!) {\n\t\tresult(themeId: $themeId) {\n\t\t\tcorrectAnswers\n\t\t}\n\t}\n": types.GetResultDocument,
    "\n\tmutation restartMutation($themeId: String!) {\n\t\trestart(themeId: $themeId)\n\t}\n": types.RestartMutationDocument,
    "\n\tmutation validateMutation($validateQuizDto: ValidateQuizDto!) {\n\t\tvalidate(validateQuizDto: $validateQuizDto) {\n\t\t\tisCorrect\n\t\t\tcorrectTranslation\n\t\t}\n\t}\n": types.ValidateMutationDocument,
    "\n\tquery getAllThemes {\n\t\tgetAllThemes {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n": types.GetAllThemesDocument,
    "\n\tquery getTheme($id: String!) {\n\t\tgetOneTheme(id: $id) {\n\t\t\ttitle\n\t\t}\n\t}\n": types.GetThemeDocument,
    "\n\tmutation createTheme {\n\t\tcreateTheme {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n": types.CreateThemeDocument,
    "\n\tmutation deleteTheme($ids: [String!]!) {\n\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t}\n": types.DeleteThemeDocument,
    "\n\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n": types.UpdateThemeDocument,
    "\n\tquery getUser {\n\t\tfindOne {\n\t\t\tid\n\t\t\temail\n\t\t\tfullName\n\t\t\tprofilePictureUrl\n\t\t}\n\t}\n": types.GetUserDocument,
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
export function graphql(source: "\n\tmutation registration($registerDto: CreateUserInput!) {\n\t\tregister(registerDto: $registerDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation registration($registerDto: CreateUserInput!) {\n\t\tregister(registerDto: $registerDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation login($loginDto: CreateUserInput!) {\n\t\tlogin(loginDto: $loginDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation login($loginDto: CreateUserInput!) {\n\t\tlogin(loginDto: $loginDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation logOut {\n\t\tlogout\n\t}\n"): (typeof documents)["\n\tmutation logOut {\n\t\tlogout\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation getNewTokens {\n\t\tgetNewTokens {\n\t\t\taccessToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation getNewTokens {\n\t\tgetNewTokens {\n\t\t\taccessToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getAllContent($themeId: String!) {\n\t\tgetAllContent(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getAllContent($themeId: String!) {\n\t\tgetAllContent(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getContentLength($themeId: String!) {\n\t\tgetContentLength(themeId: $themeId)\n\t}\n"): (typeof documents)["\n\tquery getContentLength($themeId: String!) {\n\t\tgetContentLength(themeId: $themeId)\n\t}\n"];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getVariations($themeId: String!) {\n\t\tvariations(themeId: $themeId) {\n\t\t\titemsLeft\n\t\t\ttotalItems\n\t\t\tthemeId\n\t\t\tsentence\n\t\t\tcontentId\n\t\t\tvariations {\n\t\t\t\ttranslation\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getVariations($themeId: String!) {\n\t\tvariations(themeId: $themeId) {\n\t\t\titemsLeft\n\t\t\ttotalItems\n\t\t\tthemeId\n\t\t\tsentence\n\t\t\tcontentId\n\t\t\tvariations {\n\t\t\t\ttranslation\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getResult($themeId: String!) {\n\t\tresult(themeId: $themeId) {\n\t\t\tcorrectAnswers\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getResult($themeId: String!) {\n\t\tresult(themeId: $themeId) {\n\t\t\tcorrectAnswers\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation restartMutation($themeId: String!) {\n\t\trestart(themeId: $themeId)\n\t}\n"): (typeof documents)["\n\tmutation restartMutation($themeId: String!) {\n\t\trestart(themeId: $themeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation validateMutation($validateQuizDto: ValidateQuizDto!) {\n\t\tvalidate(validateQuizDto: $validateQuizDto) {\n\t\t\tisCorrect\n\t\t\tcorrectTranslation\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation validateMutation($validateQuizDto: ValidateQuizDto!) {\n\t\tvalidate(validateQuizDto: $validateQuizDto) {\n\t\t\tisCorrect\n\t\t\tcorrectTranslation\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getAllThemes {\n\t\tgetAllThemes {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getAllThemes {\n\t\tgetAllThemes {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getTheme($id: String!) {\n\t\tgetOneTheme(id: $id) {\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getTheme($id: String!) {\n\t\tgetOneTheme(id: $id) {\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createTheme {\n\t\tcreateTheme {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createTheme {\n\t\tcreateTheme {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteTheme($ids: [String!]!) {\n\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t}\n"): (typeof documents)["\n\tmutation deleteTheme($ids: [String!]!) {\n\t\tdeleteOneOrMoreTheme(ids: $ids)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateTheme($updateThemeInput: UpdateThemeInput!) {\n\t\tupdateTheme(updateThemeInput: $updateThemeInput) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUser {\n\t\tfindOne {\n\t\t\tid\n\t\t\temail\n\t\t\tfullName\n\t\t\tprofilePictureUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUser {\n\t\tfindOne {\n\t\t\tid\n\t\t\temail\n\t\t\tfullName\n\t\t\tprofilePictureUrl\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;