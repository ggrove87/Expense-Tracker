import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($projectTitle: String!) {
  addProject(projectTitle: $projectTitle) {
    _id
    projectTitle
    createdAt
    expenses {
      _id
      expenseText
      expenseCount
      expensePrice
      createdAt
    }
  }
}
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($projectId: ID!, $expenseText: String!, $expenseCount: Int!, $expensePrice: Int!) {
    addExpense(projectId: $projectId, expenseText: $expenseText, expenseCount: $expenseCount, expensePrice: $expensePrice) {
      _id
      projectTitle
      createdAt
      expenses {
        _id
        expenseText
        expenseCount
        expensePrice
        createdAt
      }
    }
  }
`;
