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

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      expenses {
        _id
        expenseText
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($thoughtId: ID!, $expenseText: String!) {
    addExpense(thoughtId: $thoughtId, expenseText: $expenseText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      expenses {
        _id
        expenseText
        createdAt
      }
    }
  }
`;
