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
    "\n\tmutation registration($registerDto: CreateUserDto!) {\n\t\tregister(registerDto: $registerDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n": types.RegistrationDocument,
    "\n\tmutation login($loginDto: CreateUserDto!) {\n\t\tlogin(loginDto: $loginDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n": types.LoginDocument,
    "\n\tmutation logOut {\n\t\tlogout\n\t}\n": types.LogOutDocument,
    "\n\tmutation tokens {\n\t\ttokens {\n\t\t\taccessToken\n\t\t}\n\t}\n": types.TokensDocument,
    "\n\tquery contents($themeId: String!) {\n\t\tcontents(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.ContentsDocument,
    "\n\tquery contentLength($themeId: String!) {\n\t\tcontent_length(themeId: $themeId)\n\t}\n": types.ContentLengthDocument,
    "\n\tquery content($id: String!, $themeId: String!) {\n\t\tcontent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.ContentDocument,
    "\n\tmutation newContent($createContentDto: CreateContentDto!) {\n\t\tnew_content(createContentDto: $createContentDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.NewContentDocument,
    "\n\tmutation newContents($createManyContentDto: CreateManyContentDto!) {\n\t\tnew_contents(createManyContentDto: $createManyContentDto)\n\t}\n": types.NewContentsDocument,
    "\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdelete_many_content(ids: $ids, themeId: $themeId)\n\t}\n": types.DeleteManyContentDocument,
    "\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdelete_content(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.DeleteContentDocument,
    "\n\tmutation updateContent($updateContentDto: UpdateContentDto!) {\n\t\tupdate_content(updateContentDto: $updateContentDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n": types.UpdateContentDocument,
    "\n\tquery variations($themeId: String!) {\n\t\tvariations(themeId: $themeId) {\n\t\t\titemsLeft\n\t\t\ttotalItems\n\t\t\tthemeId\n\t\t\tsentence\n\t\t\tcontentId\n\t\t\tvariations {\n\t\t\t\ttranslation\n\t\t\t}\n\t\t}\n\t}\n": types.VariationsDocument,
    "\n\tquery result($themeId: String!) {\n\t\tresult(themeId: $themeId) {\n\t\t\tcorrectAnswers\n\t\t}\n\t}\n": types.ResultDocument,
    "\n\tmutation restart($themeId: String!) {\n\t\trestart(themeId: $themeId)\n\t}\n": types.RestartDocument,
    "\n\tmutation validate($validateQuizDto: ValidateQuizDto!) {\n\t\tvalidate(validateQuizDto: $validateQuizDto) {\n\t\t\tisCorrect\n\t\t\tcorrectTranslation\n\t\t}\n\t}\n": types.ValidateDocument,
    "\n\tquery themes {\n\t\tthemes {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tupdatedAt\n\t\t\tuserId\n\t\t\tlearningProgress {\n\t\t\t\twordsLearned\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.ThemesDocument,
    "\n\tquery theme($id: String!) {\n\t\ttheme(id: $id) {\n\t\t\ttitle\n\t\t}\n\t}\n": types.ThemeDocument,
    "\n\tmutation createTheme {\n\t\tnew_theme {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n": types.CreateThemeDocument,
    "\n\tmutation deleteTheme($ids: [String!]!) {\n\t\tdelete_one_or_more_theme(ids: $ids)\n\t}\n": types.DeleteThemeDocument,
    "\n\tmutation updateTheme($updateThemeDto: UpdateThemeDto!) {\n\t\tupdate_theme(updateThemeDto: $updateThemeDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n": types.UpdateThemeDocument,
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
export function graphql(source: "\n\tmutation registration($registerDto: CreateUserDto!) {\n\t\tregister(registerDto: $registerDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation registration($registerDto: CreateUserDto!) {\n\t\tregister(registerDto: $registerDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation login($loginDto: CreateUserDto!) {\n\t\tlogin(loginDto: $loginDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation login($loginDto: CreateUserDto!) {\n\t\tlogin(loginDto: $loginDto) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tprofilePictureUrl\n\t\t\t\tfullName\n\t\t\t}\n\t\t\taccessToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation logOut {\n\t\tlogout\n\t}\n"): (typeof documents)["\n\tmutation logOut {\n\t\tlogout\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation tokens {\n\t\ttokens {\n\t\t\taccessToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation tokens {\n\t\ttokens {\n\t\t\taccessToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery contents($themeId: String!) {\n\t\tcontents(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery contents($themeId: String!) {\n\t\tcontents(themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery contentLength($themeId: String!) {\n\t\tcontent_length(themeId: $themeId)\n\t}\n"): (typeof documents)["\n\tquery contentLength($themeId: String!) {\n\t\tcontent_length(themeId: $themeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery content($id: String!, $themeId: String!) {\n\t\tcontent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery content($id: String!, $themeId: String!) {\n\t\tcontent(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation newContent($createContentDto: CreateContentDto!) {\n\t\tnew_content(createContentDto: $createContentDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation newContent($createContentDto: CreateContentDto!) {\n\t\tnew_content(createContentDto: $createContentDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation newContents($createManyContentDto: CreateManyContentDto!) {\n\t\tnew_contents(createManyContentDto: $createManyContentDto)\n\t}\n"): (typeof documents)["\n\tmutation newContents($createManyContentDto: CreateManyContentDto!) {\n\t\tnew_contents(createManyContentDto: $createManyContentDto)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdelete_many_content(ids: $ids, themeId: $themeId)\n\t}\n"): (typeof documents)["\n\tmutation deleteManyContent($ids: [String!]!, $themeId: String!) {\n\t\tdelete_many_content(ids: $ids, themeId: $themeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdelete_content(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deleteContent($id: String!, $themeId: String!) {\n\t\tdelete_content(id: $id, themeId: $themeId) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateContent($updateContentDto: UpdateContentDto!) {\n\t\tupdate_content(updateContentDto: $updateContentDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateContent($updateContentDto: UpdateContentDto!) {\n\t\tupdate_content(updateContentDto: $updateContentDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\tsentence\n\t\t\ttranslation\n\t\t\ttranscription\n\t\t\tthemeId\n\t\t\tlernedCounts\n\t\t\thasLearned\n\t\t\texampleSentences\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery variations($themeId: String!) {\n\t\tvariations(themeId: $themeId) {\n\t\t\titemsLeft\n\t\t\ttotalItems\n\t\t\tthemeId\n\t\t\tsentence\n\t\t\tcontentId\n\t\t\tvariations {\n\t\t\t\ttranslation\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery variations($themeId: String!) {\n\t\tvariations(themeId: $themeId) {\n\t\t\titemsLeft\n\t\t\ttotalItems\n\t\t\tthemeId\n\t\t\tsentence\n\t\t\tcontentId\n\t\t\tvariations {\n\t\t\t\ttranslation\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery result($themeId: String!) {\n\t\tresult(themeId: $themeId) {\n\t\t\tcorrectAnswers\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery result($themeId: String!) {\n\t\tresult(themeId: $themeId) {\n\t\t\tcorrectAnswers\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation restart($themeId: String!) {\n\t\trestart(themeId: $themeId)\n\t}\n"): (typeof documents)["\n\tmutation restart($themeId: String!) {\n\t\trestart(themeId: $themeId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation validate($validateQuizDto: ValidateQuizDto!) {\n\t\tvalidate(validateQuizDto: $validateQuizDto) {\n\t\t\tisCorrect\n\t\t\tcorrectTranslation\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation validate($validateQuizDto: ValidateQuizDto!) {\n\t\tvalidate(validateQuizDto: $validateQuizDto) {\n\t\t\tisCorrect\n\t\t\tcorrectTranslation\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery themes {\n\t\tthemes {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tupdatedAt\n\t\t\tuserId\n\t\t\tlearningProgress {\n\t\t\t\twordsLearned\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery themes {\n\t\tthemes {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t\tupdatedAt\n\t\t\tuserId\n\t\t\tlearningProgress {\n\t\t\t\twordsLearned\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery theme($id: String!) {\n\t\ttheme(id: $id) {\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery theme($id: String!) {\n\t\ttheme(id: $id) {\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createTheme {\n\t\tnew_theme {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createTheme {\n\t\tnew_theme {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteTheme($ids: [String!]!) {\n\t\tdelete_one_or_more_theme(ids: $ids)\n\t}\n"): (typeof documents)["\n\tmutation deleteTheme($ids: [String!]!) {\n\t\tdelete_one_or_more_theme(ids: $ids)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateTheme($updateThemeDto: UpdateThemeDto!) {\n\t\tupdate_theme(updateThemeDto: $updateThemeDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateTheme($updateThemeDto: UpdateThemeDto!) {\n\t\tupdate_theme(updateThemeDto: $updateThemeDto) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\ttitle\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;