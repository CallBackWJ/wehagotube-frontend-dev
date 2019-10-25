import gql from "graphql-tag";
export const SIGN_UP = gql`
  mutation signUp(
    $code: String!
  ) {
    signUp(
      code: $code
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
