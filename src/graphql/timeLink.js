import gql from "graphql-tag";
export const CREATE_TIMELINK = gql`
mutation createTimeLink($videoId: String!, $seek: Int!, $desc: String!) {
  createTimeLink(videoId: $videoId, seek: $seek, desc: $desc) {
    id
    seek
    desc
  }
}
`;
export const DELETE_TIMELINK = gql`
mutation deleteTimeLink($id: String!) {
  deleteTimeLink(id: $id) {
    id
    seek
    desc
  }
}
`;