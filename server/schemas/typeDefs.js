const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    projectTitle: String
    createdAt: String
    expenses: [Expense]!
  }

  type Expense {
    _id: ID
    expenseText: String
    expenseCount: Int
    expensePrice: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(projectId: ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(projectTitle: String!): Project
    addExpense(projectId: ID!, expenseText: String!, expenseCount: Int!, expensePrice: Int!): Project
    removeProject(projectId: ID!): Project
    removeExpense(projectId: ID!, expenseId: ID!): Project
  }
`;

module.exports = typeDefs;
