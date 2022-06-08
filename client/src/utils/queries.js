import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 query Query($username: String!) {
  user(username: $username) {
    _id
    username
    email
    projects {
      _id
      projectTitle
      createdAt
    }
  }
}
`;

export const QUERY_PROJECTS = gql`
  query Query($username: String) {
  projects(username: $username) {
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

export const QUERY_SINGLE_PROJECT = gql`
 query Query($projectId: ID!) {
  project(projectId: $projectId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      projects {
        _id
        projectTitle
        createdAt
      }
    }
  }
`;
