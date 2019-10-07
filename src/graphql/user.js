import gql from "graphql-tag";
export const SIGN_UP = gql`
  mutation signUp(
    $name: String!
    $avatar: String!
    $email: String!
    $accessToken: String!
  ) {
    signUp(
      name: $name
      avatar: $avatar
      email: $email
      accessToken: $accessToken
    )
  }
`;

export const ME = gql`
  {
    me {
      name
      email
      permission
      avatar
    }
  }
`;
