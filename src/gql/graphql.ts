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

export type CreateContentInput = {
  exampleSentences?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  sentence: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
  transcription?: InputMaybe<Scalars['String']['input']>;
  translation: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type LearningProgress = {
  __typename?: 'LearningProgress';
  accuracyRate?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  lastStudiedAt?: Maybe<Scalars['DateTime']['output']>;
  themeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  wordsLearned: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createContent: Content;
  createTheme: Theme;
  deleteOneOrMoreContent: Scalars['Int']['output'];
  deleteOneOrMoreTheme: Scalars['Int']['output'];
  getNewTokens: AuthResponse;
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  register: AuthResponse;
  updateContent: Content;
  updateLearningProgress: LearningProgress;
  updateTheme: Theme;
  updateUser: User;
};


export type MutationCreateContentArgs = {
  createContentInput: CreateContentInput;
};


export type MutationDeleteOneOrMoreContentArgs = {
  ids: Array<Scalars['String']['input']>;
  themeId: Scalars['String']['input'];
};


export type MutationDeleteOneOrMoreThemeArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  loginDto: CreateUserInput;
};


export type MutationRegisterArgs = {
  registerDto: CreateUserInput;
};


export type MutationUpdateContentArgs = {
  updateContentInput: UpdateContentInput;
};


export type MutationUpdateLearningProgressArgs = {
  updateLearningProgressInput: UpdateLearningProgressInput;
};


export type MutationUpdateThemeArgs = {
  updateThemeInput: UpdateThemeInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  findOne: User;
  getAllContent: Array<Content>;
  getAllThemes: Array<Theme>;
  getLearningProgress: LearningProgress;
  getOneContent: Content;
  getOneTheme: Theme;
};


export type QueryGetAllContentArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryGetLearningProgressArgs = {
  themeId: Scalars['String']['input'];
};


export type QueryGetOneContentArgs = {
  id: Scalars['String']['input'];
  themeId: Scalars['String']['input'];
};


export type QueryGetOneThemeArgs = {
  id: Scalars['String']['input'];
};

export type Theme = {
  __typename?: 'Theme';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  learningProgress: LearningProgress;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UpdateContentInput = {
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

export type UpdateLearningProgressInput = {
  accuracyRate?: InputMaybe<Scalars['Int']['input']>;
  lastStudiedAt?: InputMaybe<Scalars['DateTime']['input']>;
  themeId: Scalars['String']['input'];
  wordsLearned?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateThemeInput = {
  id: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
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

export type RegistrationMutationVariables = Exact<{
  registerDto: CreateUserInput;
}>;


export type RegistrationMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, profilePictureUrl?: string | null, fullName?: string | null, createdAt: any } } };

export type LoginMutationVariables = Exact<{
  loginDto: CreateUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, profilePictureUrl?: string | null, fullName?: string | null } } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logout: boolean };

export type GetThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetThemesQuery = { __typename?: 'Query', getAllThemes: Array<{ __typename?: 'Theme', id: string, createdAt: any, title?: string | null }> };

export type CreateThemeMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateThemeMutation = { __typename?: 'Mutation', createTheme: { __typename?: 'Theme', id: string, createdAt: any, title?: string | null } };

export type DeleteThemeMutationVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type DeleteThemeMutation = { __typename?: 'Mutation', deleteOneOrMoreTheme: number };

export type UpdateThemeMutationVariables = Exact<{
  updateThemeInput: UpdateThemeInput;
}>;


export type UpdateThemeMutation = { __typename?: 'Mutation', updateTheme: { __typename?: 'Theme', id: string, createdAt: any, title?: string | null } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', findOne: { __typename?: 'User', id: string, email: string, fullName?: string | null, profilePictureUrl?: string | null } };


export const RegistrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registerDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registerDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registerDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<RegistrationMutation, RegistrationMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
export const GetThemesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getThemes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllThemes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetThemesQuery, GetThemesQueryVariables>;
export const CreateThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTheme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateThemeMutation, CreateThemeMutationVariables>;
export const DeleteThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTheme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOneOrMoreTheme"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteThemeMutation, DeleteThemeMutationVariables>;
export const UpdateThemeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTheme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateThemeInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateThemeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTheme"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateThemeInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateThemeInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<UpdateThemeMutation, UpdateThemeMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePictureUrl"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;