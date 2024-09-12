/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Content = {
  __typename?: 'Content';
  createdAt: Scalars['DateTime']['output'];
  exampleSentences?: Maybe<Array<Scalars['String']['output']>>;
  hasLearned: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  lernedCounts: Scalars['Int']['output'];
  sentence: Scalars['String']['output'];
  themeId: Scalars['String']['output'];
  transcription?: Maybe<Scalars['String']['output']>;
  translation: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateContentDto = {
  exampleSentences?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  sentence: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  transcription?: InputMaybe<Scalars['String']['input']>;
  translation: Scalars['String']['input'];
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type LearningProgress = {
  __typename?: 'LearningProgress';
  accuracyRate?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  lastStudiedAt?: Maybe<Scalars['DateTime']['output']>;
  themeId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId?: Maybe<Scalars['String']['output']>;
  wordsLearned: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  delete_content: Content;
  delete_many_content: Scalars['Int']['output'];
  delete_one_or_more_theme: Scalars['Int']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  new_content: Content;
  new_theme: Theme;
  register: AuthResponse;
  restart: Scalars['Boolean']['output'];
  tokens: TokensResponse;
  updateLearningProgress: LearningProgress;
  update_content: Content;
  update_theme: Theme;
  update_user: User;
  validate: ValidationResult;
};


export type MutationDelete_ContentArgs = {
  id: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type MutationDelete_Many_ContentArgs = {
  ids: Array<Scalars['String']['input']>;
  themeId: Scalars['String']['input'];
};


export type MutationDelete_One_Or_More_ThemeArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  loginDto: CreateUserDto;
};


export type MutationNew_ContentArgs = {
  createContentDto: CreateContentDto;
};


export type MutationRegisterArgs = {
  registerDto: CreateUserDto;
};


export type MutationRestartArgs = {
  themeId: Scalars['String']['input'];
};


export type MutationUpdateLearningProgressArgs = {
  updateLearningProgressDto: UpdateLearningProgressDto;
};


export type MutationUpdate_ContentArgs = {
  updateContentDto: UpdateContentDto;
};


export type MutationUpdate_ThemeArgs = {
  updateThemeDto: UpdateThemeDto;
};


export type MutationUpdate_UserArgs = {
  updateUserDto: UpdateUserDto;
};


export type MutationValidateArgs = {
  validateQuizDto: ValidateQuizDto;
};

export type Query = {
  __typename?: 'Query';
  content: Content;
  content_length: Scalars['Int']['output'];
  contents: Array<Content>;
  findOne: User;
  getLearningProgress: LearningProgress;
  result: Result;
  theme: Theme;
  themes: Array<Theme>;
  variations: QuizSession;
};


export type QueryContentArgs = {
  id: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryContent_LengthArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryContentsArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryGetLearningProgressArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryResultArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryThemeArgs = {
  id: Scalars['String']['input'];
};


export type QueryVariationsArgs = {
  themeId: Scalars['String']['input'];
};

export type QuizSession = {
  __typename?: 'QuizSession';
  contentId: Scalars['String']['output'];
  itemsLeft: Scalars['Int']['output'];
  sentence: Scalars['String']['output'];
  themeId: Scalars['String']['output'];
  totalItems: Scalars['Int']['output'];
  variations: Array<Variations>;
};

export type Result = {
  __typename?: 'Result';
  correctAnswers: Scalars['Int']['output'];
};

export type Theme = {
  __typename?: 'Theme';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  learningProgress: LearningProgress;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type TokensResponse = {
  __typename?: 'TokensResponse';
  accessToken: Scalars['String']['output'];
};

export type UpdateContentDto = {
  exampleSentences?: InputMaybe<Array<Scalars['String']['input']>>;
  hasLearned?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  lernedCounts?: InputMaybe<Scalars['Int']['input']>;
  sentence: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  transcription?: InputMaybe<Scalars['String']['input']>;
  translation: Scalars['String']['input'];
};

export type UpdateLearningProgressDto = {
  accuracyRate?: InputMaybe<Scalars['Int']['input']>;
  lastStudiedAt?: InputMaybe<Scalars['DateTime']['input']>;
  themeId: Scalars['String']['input'];
  wordsLearned?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateThemeDto = {
  id: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  themes: Array<Theme>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ValidateQuizDto = {
  contentId: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  translation: Scalars['String']['input'];
};

export type ValidationResult = {
  __typename?: 'ValidationResult';
  correctTranslation: Scalars['String']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export type Variations = {
  __typename?: 'Variations';
  translation: Scalars['String']['output'];
};

export type RegistrationMutationVariables = Exact<{
  registerDto: CreateUserDto;
}>;


export type RegistrationMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, profilePictureUrl?: string | null, fullName?: string | null, createdAt: any } } };

export type LoginMutationVariables = Exact<{
  loginDto: CreateUserDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, profilePictureUrl?: string | null, fullName?: string | null } } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logout: boolean };

export type TokensMutationVariables = Exact<{ [key: string]: never; }>;


export type TokensMutation = { __typename?: 'Mutation', tokens: { __typename?: 'TokensResponse', accessToken: string } };

export type ContentsQueryVariables = Exact<{
  themeId: Scalars['String']['input'];
}>;


export type ContentsQuery = { __typename?: 'Query', contents: Array<{ __typename?: 'Content', id: string, createdAt: any, sentence: string, translation: string, transcription?: string | null, themeId: string, lernedCounts: number, hasLearned: boolean, exampleSentences?: Array<string> | null, imageUrl?: string | null, updatedAt: any }> };

export type ContentLengthQueryVariables = Exact<{
  themeId: Scalars['String']['input'];
}>;


export type ContentLengthQuery = { __typename?: 'Query', content_length: number };

export type ContentQueryVariables = Exact<{
  id: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
}>;


export type ContentQuery = { __typename?: 'Query', content: { __typename?: 'Content', id: string, createdAt: any, sentence: string, translation: string, transcription?: string | null, themeId: string, lernedCounts: number, hasLearned: boolean, exampleSentences?: Array<string> | null, imageUrl?: string | null } };

export type NewContentMutationVariables = Exact<{
  createContentDto: CreateContentDto;
}>;


export type NewContentMutation = { __typename?: 'Mutation', new_content: { __typename?: 'Content', id: string, createdAt: any, sentence: string, translation: string, transcription?: string | null, themeId: string, lernedCounts: number, hasLearned: boolean, exampleSentences?: Array<string> | null, imageUrl?: string | null } };

export type DeleteManyContentMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
  themeId: Scalars['String']['input'];
}>;


export type DeleteManyContentMutation = { __typename?: 'Mutation', delete_many_content: number };

export type DeleteContentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
}>;


export type DeleteContentMutation = { __typename?: 'Mutation', delete_content: { __typename?: 'Content', id: string, createdAt: any, sentence: string, translation: string, transcription?: string | null, themeId: string, lernedCounts: number, hasLearned: boolean, exampleSentences?: Array<string> | null, imageUrl?: string | null } };

export type UpdateContentMutationVariables = Exact<{
  updateContentDto: UpdateContentDto;
}>;


export type UpdateContentMutation = { __typename?: 'Mutation', update_content: { __typename?: 'Content', id: string, createdAt: any, sentence: string, translation: string, transcription?: string | null, themeId: string, lernedCounts: number, hasLearned: boolean, exampleSentences?: Array<string> | null, imageUrl?: string | null } };

export type VariationsQueryVariables = Exact<{
  themeId: Scalars['String']['input'];
}>;


export type VariationsQuery = { __typename?: 'Query', variations: { __typename?: 'QuizSession', itemsLeft: number, totalItems: number, themeId: string, sentence: string, contentId: string, variations: Array<{ __typename?: 'Variations', translation: string }> } };

export type ResultQueryVariables = Exact<{
  themeId: Scalars['String']['input'];
}>;


export type ResultQuery = { __typename?: 'Query', result: { __typename?: 'Result', correctAnswers: number } };

export type RestartMutationVariables = Exact<{
  themeId: Scalars['String']['input'];
}>;


export type RestartMutation = { __typename?: 'Mutation', restart: boolean };

export type ValidateMutationVariables = Exact<{
  validateQuizDto: ValidateQuizDto;
}>;


export type ValidateMutation = { __typename?: 'Mutation', validate: { __typename?: 'ValidationResult', isCorrect: boolean, correctTranslation: string } };

export type ThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type ThemesQuery = { __typename?: 'Query', themes: Array<{ __typename?: 'Theme', id: string, createdAt: any, title?: string | null, updatedAt: any, userId: string, learningProgress: { __typename?: 'LearningProgress', wordsLearned: number, createdAt: any, updatedAt: any } }> };

export type ThemeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ThemeQuery = { __typename?: 'Query', theme: { __typename?: 'Theme', title?: string | null } };

export type CreateThemeMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateThemeMutation = { __typename?: 'Mutation', new_theme: { __typename?: 'Theme', id: string, createdAt: any, title?: string | null } };

export type DeleteThemeMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type DeleteThemeMutation = { __typename?: 'Mutation', delete_one_or_more_theme: number };

export type UpdateThemeMutationVariables = Exact<{
  updateThemeDto: UpdateThemeDto;
}>;


export type UpdateThemeMutation = { __typename?: 'Mutation', update_theme: { __typename?: 'Theme', id: string, createdAt: any, title?: string | null } };


export const RegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registerDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registerDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RegistrationMutation, RegistrationMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const TokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<TokensMutation, TokensMutationVariables>;
export const ContentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"themeId"}},{"kind":"Field","name":{"kind":"Name","value":"lernedCounts"}},{"kind":"Field","name":{"kind":"Name","value":"hasLearned"}},{"kind":"Field","name":{"kind":"Name","value":"exampleSentences"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ContentsQuery, ContentsQueryVariables>;
export const ContentLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contentLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_length"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}]}]}}]} as unknown as DocumentNode<ContentLengthQuery, ContentLengthQueryVariables>;
export const ContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"content"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"themeId"}},{"kind":"Field","name":{"kind":"Name","value":"lernedCounts"}},{"kind":"Field","name":{"kind":"Name","value":"hasLearned"}},{"kind":"Field","name":{"kind":"Name","value":"exampleSentences"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<ContentQuery, ContentQueryVariables>;
export const NewContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"newContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createContentDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateContentDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createContentDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createContentDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"themeId"}},{"kind":"Field","name":{"kind":"Name","value":"lernedCounts"}},{"kind":"Field","name":{"kind":"Name","value":"hasLearned"}},{"kind":"Field","name":{"kind":"Name","value":"exampleSentences"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<NewContentMutation, NewContentMutationVariables>;
export const DeleteManyContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteManyContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_many_content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}]}]}}]} as unknown as DocumentNode<DeleteManyContentMutation, DeleteManyContentMutationVariables>;
export const DeleteContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"themeId"}},{"kind":"Field","name":{"kind":"Name","value":"lernedCounts"}},{"kind":"Field","name":{"kind":"Name","value":"hasLearned"}},{"kind":"Field","name":{"kind":"Name","value":"exampleSentences"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<DeleteContentMutation, DeleteContentMutationVariables>;
export const UpdateContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateContentDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateContentDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateContentDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateContentDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}},{"kind":"Field","name":{"kind":"Name","value":"transcription"}},{"kind":"Field","name":{"kind":"Name","value":"themeId"}},{"kind":"Field","name":{"kind":"Name","value":"lernedCounts"}},{"kind":"Field","name":{"kind":"Name","value":"hasLearned"}},{"kind":"Field","name":{"kind":"Name","value":"exampleSentences"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<UpdateContentMutation, UpdateContentMutationVariables>;
export const VariationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"variations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemsLeft"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"themeId"}},{"kind":"Field","name":{"kind":"Name","value":"sentence"}},{"kind":"Field","name":{"kind":"Name","value":"contentId"}},{"kind":"Field","name":{"kind":"Name","value":"variations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translation"}}]}}]}}]}}]} as unknown as DocumentNode<VariationsQuery, VariationsQueryVariables>;
export const ResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"result"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}}]}}]} as unknown as DocumentNode<ResultQuery, ResultQueryVariables>;
export const RestartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"restart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"themeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"themeId"}}}]}]}}]} as unknown as DocumentNode<RestartMutation, RestartMutationVariables>;
export const ValidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"validate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"validateQuizDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ValidateQuizDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"validateQuizDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"validateQuizDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCorrect"}},{"kind":"Field","name":{"kind":"Name","value":"correctTranslation"}}]}}]}}]} as unknown as DocumentNode<ValidateMutation, ValidateMutationVariables>;
export const ThemesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"themes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"themes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"learningProgress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wordsLearned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<ThemesQuery, ThemesQueryVariables>;
export const ThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"theme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"theme"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ThemeQuery, ThemeQueryVariables>;
export const CreateThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"new_theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateThemeMutation, CreateThemeMutationVariables>;
export const DeleteThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTheme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_one_or_more_theme"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteThemeMutation, DeleteThemeMutationVariables>;
export const UpdateThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTheme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateThemeDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateThemeDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_theme"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateThemeDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateThemeDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<UpdateThemeMutation, UpdateThemeMutationVariables>;